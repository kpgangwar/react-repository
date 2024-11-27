import styles from "./ContactHeader.module.css";
const ContactHeader = () => {
  return (
    <div 
    className={`${styles.contact_section}`}>
        <h1>
            CONTACT US
        </h1>
        <p>
        Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. Lorem
         Ipsum has been the industry standard 
         dummy text ever since the 1500s, when an
        </p>
    </div>
  )
}

export default ContactHeader