import React from "react";
import { getimageUrl } from "../../utils";
import styles from "./About.module.css"

function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getimageUrl("about/saikat.png")}
          alt="Me photo"
          className={styles.aboutImage}
        />

        <ul className={styles.aboutItems}>
          <li className= {styles.aboutItem}>
            <img src={getimageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>I'm a Frontend developer with experience in building and optimized sites.</p>
            </div>
          </li>

          <li className= {styles.aboutItem}>
            <img src={getimageUrl("about/serverIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I have experience developing fast and optimized backend systems and api's.</p>
            </div>
          </li>
          <li className= {styles.aboutItem}>
            <img src={getimageUrl("about/programming.png")} alt="ui icon" />
            <div className={styles.aboutItemText}>
              <h3>Compititive Programmer</h3>
              <p>I am a Compititive Programmer with good contest rating. Codechef 2 star (max 1485). </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
