addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
	const originURL = 'http://localhost:3000';

	if (request.method === 'OPTIONS') {
		// Handle CORS preflight request
		return new Response(null, {
			status: 204,
			headers: {
				'Access-Control-Allow-Origin': originURL,
				'Access-Control-Allow-Methods': 'POST, OPTIONS',
				'Access-Control-Allow-Headers': 'Content-Type',
			},
		});
	}

	if (request.method === 'POST') {
		try {
			const { message } = await request.json();
			console.log(message);
			try {
				// WORKING - Set env variables in worker settings
				const accountSid = globalThis.TWILIO_ACCOUNT_SID;
				const authToken = globalThis.TWILIO_AUTH_TOKEN;
				// +18777804236 twilio test number
				const phoneToText = '+19185571067';

				if (!accountSid || !authToken) {
					throw new Error('Environment variables TWILIO_ACCOUNT_SID or TWILIO_AUTH_TOKEN are not set');
				}

				const credentials = btoa(`${accountSid}:${authToken}`);
				const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
					method: 'POST',
					headers: {
						'Authorization': `Basic ${credentials}`,
						'Content-Type': 'application/x-www-form-urlencoded',
					},
					body: new URLSearchParams({
						Body: message,
						From: '+18669103168',
						To: phoneToText,
					}),
				});
				const result = await response.json();
				console.log(result);
			} catch (error) {
				console.error('Error accessing environment variables:', error);
			}
			return new Response('Message sent successfully', {
				status: 200,
				headers: {
					'Access-Control-Allow-Origin': originURL,
					'Content-Type': 'application/json',
				},
			});
		} catch (error) {
			console.error('Error sending message:', error);
			return new Response('Failed to send message', {
				status: 500,
				headers: {
					'Access-Control-Allow-Origin': originURL,
					'Content-Type': 'application/json',
				},
			});
		}
	}

	return new Response('Method not allowed', {
		status: 405,
		headers: {
			'Access-Control-Allow-Origin': originURL,
			'Content-Type': 'application/json',
		},
	});
}
