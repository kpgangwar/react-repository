import Button from '../Button/Button';
import styles from './Contact.module.css';
import { MdOutlineMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('kp');
  const [email, setEmail] = useState('nidhi@gmail.com');
  const [text, setText] = useState('Subscribe to this channel');

const onSubmit = (event) => {
  event.preventDefault();

  setName(event.target[0].value);
  setEmail(event.target[1].value);
  setText(event.target[2].value);

 
// console.log("name", event.target[0].value); 
// console.log("email", event.target[1].value); 
// console.log("text", event.target[2].value); 
};
  // const onViaCallSubmit = () => {
  //   console.log('i am from call');
    
  // }
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={< MdOutlineMessage />} />
          <Button 
          // onClick={onViaCallSubmit}
          text="VIA CALL" icon={<FaPhoneAlt />} />
        </div>

        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail />} />

        <form
        onSubmit={onSubmit}
        >
          <div className={styles.form_control}>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' />
          </div>
          <div className={styles.form_control}>
            <label htmlFor='email'>Email</label>
            <input type='Email' name='email' />
          </div>
          <div className={styles.form_control}>
            <label htmlFor='text'>Text</label>
            <textarea name='text' rows='8' />
          </div>
         
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button
              text="SUBMIT BUTTON"
            />

          </div>
          <div>
            {name+" "+ email+" "+ text}
          </div>
        </form>

      </div>
      <div className={styles.contact_image}>
        <img src='/images/music.webp' 
        alt='Contact Image' />
      </div>
    </section>
  )
}

export default ContactForm;