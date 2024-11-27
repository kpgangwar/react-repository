import styles from "./Navigation.module.css";

const Navigation = () => {
    console.log(styles);
    
  return(
  <nav className={`${styles.navigation} container`}>
    <div className={styles.logo}>
        <img src="/images/printer.webp" alt="printer-logo"/>
    </div>

    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
  </nav>
  )
}

export default Navigation;