const AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = async (event) => {
    console.log('Received event:', JSON.stringify(event, null, 2));

    const body = JSON.parse(event.body);
    const message = body.message;

    const params = {
        Message: message,
        TopicArn: 'arn:aws:sns:us-east-2:060795909461:TuBros' // SNS Topic ARN
    };

    try {
        const result = await sns.publish(params).promise();
        console.log('SNS publish result:', result);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Message published successfully' }),
        };
    } catch (error) {
        console.error('Error publishing message:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error publishing message: ' + error.message }),
        };
    }
};
