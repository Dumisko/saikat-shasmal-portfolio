import React from 'react'
import { getimageUrl } from '../../utils'
import styles from "./Contact.module.css"
function Contact() {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul  className={styles.links}>
        <li className={styles.link}>
            <img src={getimageUrl("contact/email.png")} alt="Email icon" />
            <a href="mailto:s.shasmal1980@gmail.com" className={styles.linka}>Email</a>
        </li>
        <li className={styles.link}>
            <img src={getimageUrl("contact/github.png")} alt="Github icon" />
            <a href="https://github.com/Dumisko" className={styles.linka} >Github</a>
        </li>
        <li className={styles.link}>
            <img src={getimageUrl("contact/linkedin.png")} alt="Linkedin icon" />
 <a href="https://www.linkedin.com/in/saikat-shasmal-257a91176" className={styles.linka}>Linkedin</a>
        </li>
        
      </ul>
      <hr className={styles.end} />
      <p className={styles.endline}> © 2024 saikatshasmal portfolio. All rights reserved.</p>
    </footer>
  )
}

export default Contact

