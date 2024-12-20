import React from "react";
import skills from "../../Data/skills.json";
import history from "../../Data/history.json";
import { getimageUrl } from "../../utils";
import styles from "./Experience.module.css";


function Experience() {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Education and Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getimageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>

        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img

                // new added
                   className={styles.historyimagestyle}
                  src={getimageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{` ${historyItem.organisation}`}</h3>
                  <h4> {`${historyItem.role}`} </h4>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experiences, id) => {
                      return <li key={id}>{experiences}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Experience;
