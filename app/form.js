import { useEffect } from 'react';

export default function Form() {
  useEffect(() => {
    const handleSubmit = async (event) => {
      event.preventDefault();

      const form = event.target;
      const message = form.message.value;
      console.log(form);
      console.log(message)

      try {
        const response = await fetch('https://4aokq8gth1.execute-api.us-east-2.amazonaws.com/prod', { //Cloudflare worker url
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message }),
        });

        const result = await response.text();
        alert(result);
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to send message.');
      }
    };

    const form = document.getElementById('snsForm');

    if (form) {
      form.addEventListener('submit', handleSubmit);
    }

    // Clean up event listener
    return () => {
      if (form) {
        form.removeEventListener('submit', handleSubmit);
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <form id="snsForm">
      <textarea name="message" placeholder="Your message"></textarea>
      <button type="submit">Send Message</button>
    </form>
  );
}
