import React from 'react'
import { getimageUrl } from '../../utils'
import styles from './Hero.module.css'


function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'am Saikat</h1>
        <p className={styles.description}> I am a full stack developer with 6 months of experience using react and node js reach out if you want to learn more.</p>
       
        <div className={styles.contactBtndiv}>
        <a className={styles.contactBtn} href="mailto:s.shasmal1980@gamil.com">contact me</a>
          {/* add resume link */}
        <a className={styles.contactBtn} href="https://drive.google.com/file/d/1y--suDY-lgEvtxXmF-P6QXHnY-CLAmGh/view?usp=sharing">resume</a>
        </div>

      </div>
      <img className={styles.heroImg} src={getimageUrl("hero/hero2.png")} alt="Hero image of me"  />

      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero
