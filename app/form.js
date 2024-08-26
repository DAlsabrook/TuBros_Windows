import { useEffect } from 'react';
import styles from './styles/page.module.css';

export default function Form() {
  useEffect(() => {
    const handleSubmit = async (event) => {
      event.preventDefault();

      const form = event.target;
      const name = form.name.value;
      const company = form.company.value;
      const building = form.building.value;
      const message = form.message.value;

      const fullMessage = `Name: ${name}\nCompany: ${company}\nBuilding Type: ${building}\nMessage: ${message}`;
      console.log(fullMessage)
      try {
        const response = await fetch('https://tubros-worker.dfalsabrook.workers.dev/', { //Cloudflare worker url
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: fullMessage }),
        });

        const result = await response.text();
        alert(result + '! \nWe will text or call you soon to set up an appointment.');
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
    <form className={styles.form} id="snsForm">
      <input type='text' className={styles.formName} name='name' placeholder='Full Name'></input>
      <input type='text' className={styles.formCompany} name='company' placeholder='Company (Optional)'></input>
      <input type='text' className={styles.formBuilding} name='building' placeholder='(Residential/Commercial)'></input>
      <textarea className={styles.formMessage} name="message" placeholder="Your message"></textarea>
      <button className={styles.formSubmit} type="submit">Send Message</button>
    </form>
  );
}
