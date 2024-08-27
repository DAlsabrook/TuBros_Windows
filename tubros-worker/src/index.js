addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
	const allowedOrigins = [
		'http://localhost:3000',
		'https://tubroswindows.com',
		'https://www.tubroswindows.com'
	];

	const origin = request.headers.get('Origin');
	let corsHeaders = {
		'Access-Control-Allow-Methods': 'POST, OPTIONS',
		'Access-Control-Allow-Headers': 'Content-Type',
	};

	if (allowedOrigins.includes(origin)) {
		corsHeaders['Access-Control-Allow-Origin'] = origin;
	}

	if (request.method === 'OPTIONS') {
		// Handle CORS preflight request
		return new Response(null, {
			status: 204,
			headers: corsHeaders,
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
				const phoneToText = '+1' + globalThis.PHONE_TO_TEXT;

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
				headers: corsHeaders,
			});
		} catch (error) {
			console.error('Error sending message:', error);
			return new Response('Failed to send message', {
				status: 500,
				headers: corsHeaders,
			});
		}
	}

	return new Response('Method not allowed', {
		status: 405,
		headers: corsHeaders,
	});
}
