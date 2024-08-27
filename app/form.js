import { useEffect, useState } from 'react';
import styles from './styles/page.module.css';
import { ConsoleLogger } from '@aws-amplify/core';

export default function Form() {
  const [selectedForm, setSelectedForm] = useState('residential'); // Default to residential on load

  const handleFormSelection = (formType) => {
    setSelectedForm(formType);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const number = form.number.value;
    const company = form.company ? form.company.value : 'N/A';
    const message = form.message ? form.message.value : 'N/A';
    const city = form.city ? form.city.value : 'N/A';


    const submitButton = document.getElementById('submitBtn');
    const thankYouMessage = document.getElementById('thankYouMessage');

    if (thankYouMessage.innerText === 'We will call or text soon!') {
      alert('Though we would love to hear from you, we do have to limit the amount of messeges sent per person.\n\nGive us a call or text at (918) 402-8120!');
      return;
    }

    if (submitButton.innerText === "Send") {
      submitButton.innerText = 'Thank You!';
      thankYouMessage.innerText = 'We will call or text soon!';
    }


    const fullMessage = `Type: ${form.id}\nName: ${name}\nCity: ${city}\nPhone Number: ${number}\nCompany: ${company}\nMessage: ${message}`;

    try {
      const response = await fetch('https://tubros-worker.dfalsabrook.workers.dev/', { // Cloudflare worker URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: fullMessage }), // Ensure the key is 'message'
      });

      const result = await response.text();
      alert(result + '! \nWe will text or call you soon to set up an appointment.');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message.');
    }
  };

  useEffect(() => {
    const residential = document.getElementById('residential');
    const commercial = document.getElementById('commercial');
    const general = document.getElementById('generalQuestion');
    const forms = [residential, commercial, general];

    for (let i = 0; i < forms.length; i++) {
      if (forms[i]) {
        forms[i].addEventListener('submit', handleSubmit);
      }
    }
    // Clean up event listener
    return () => {
      for (let i = 0; i < forms.length; i++) {
        if (forms[i]) {
          forms[i].removeEventListener('submit', handleSubmit);
        }
      }
    };
  });

  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const handlePhoneInput = (event) => {
    const formattedPhoneNumber = formatPhoneNumber(event.target.value);
    event.target.value = formattedPhoneNumber;
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formSelectBtnContainer}>
        <button
          className={`${styles.formSelectBtn} ${selectedForm === 'residential' ? styles.active : ''}`}
          onClick={() => handleFormSelection('residential')}>
          Residential
        </button>
        <button
          className={`${styles.formSelectBtn} ${selectedForm === 'commercial' ? styles.active : ''}`}
          onClick={() => handleFormSelection('commercial')}>
          Commercial
        </button>
        <button
          className={`${styles.formSelectBtn} ${selectedForm === 'general' ? styles.active : ''}`}
          onClick={() => handleFormSelection('general')}>
          Questions
        </button>
      </div>

      {selectedForm === 'residential' && (
        <form className={styles.form} id="residential">
          <input type='text' className={styles.formName} name='name' placeholder='Full Name' required></input>
          <input type='text' className={styles.formNumber} name='number' placeholder='Phone Number' required onInput={handlePhoneInput}></input>
          <select className={styles.formDropdown} name="city" required>
            <option value="" disabled defaultValue>City</option>
            <option value="Tulsa">Tulsa</option>
            <option value="Broken Arrow">Broken Arrow</option>
            <option value="Bixby">Bixby</option>
            <option value="Glenpool">Glenpool</option>
            <option value="Jenks">Jenks</option>
            <option value="Sapulpa">Sapulpa</option>
            <option value="Sand Springs">Sand Springs</option>
            <option value="Skiatook">Skiatook</option>
            <option value="Owasso">Owasso</option>
            <option value="Catoosa">Catoosa</option>
            <option value="Other">Other</option>
          </select>
          <textarea className={styles.formMessage} name="message" placeholder="Message (Optional)" maxLength="100"></textarea>
          <button className={styles.formSubmit} type="submit" id='submitBtn'>Send</button>
        </form>
      )}

      {selectedForm === 'commercial' && (
        <form className={styles.form} id="commercial">
          <input type='text' className={styles.formName} name='name' placeholder='Full Name' required></input>
          <input type='text' className={styles.formNumber} name='number' placeholder='Phone Number' required onInput={handlePhoneInput}></input>
          <select className={styles.formDropdown} name="city" required>
            <option value="" disabled defaultValue>City</option>
            <option value="Tulsa">Tulsa</option>
            <option value="Broken Arrow">Broken Arrow</option>
            <option value="Bixby">Bixby</option>
            <option value="Glenpool">Glenpool</option>
            <option value="Jenks">Jenks</option>
            <option value="Sapulpa">Sapulpa</option>
            <option value="Sand Springs">Sand Springs</option>
            <option value="Skiatook">Skiatook</option>
            <option value="Owasso">Owasso</option>
            <option value="Catoosa">Catoosa</option>
            <option value="Other">Other</option>
          </select>
          <input type='text' className={styles.formCompany} name='company' placeholder='Business' required></input>
          <textarea className={styles.formMessage} name="message" placeholder="Optional (Optional)" maxLength="100"></textarea>
          <button className={styles.formSubmit} type="submit" id='submitBtn'>Send</button>
        </form>
      )}

      {selectedForm === 'general' && (
        <form className={styles.form} id="generalQuestion">
          <input type='text' className={styles.formName} name='name' placeholder='Full Name' required></input>
          <input type='text' className={styles.formNumber} name='number' placeholder='Phone Number' required onInput={handlePhoneInput}></input>
          <textarea className={styles.formMessage} name="message" placeholder="Question" maxLength="100" required></textarea>
          <button className={styles.formSubmit} type="submit" id='submitBtn'>Send</button>
        </form>
      )}
    </div>
  );
}
