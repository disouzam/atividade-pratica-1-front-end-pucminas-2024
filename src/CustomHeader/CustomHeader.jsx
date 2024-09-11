import React from 'react';
import styles from './CustomHeader.module.css';

const CustomHeader = () => {
  return (
    <div className={styles.CustomHeader}>
      <ul className={styles.HorizontalMenuItems}>
        <li>
          <a
            href="./blog"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            href="./about"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="./description"
          >
            Description
          </a>
        </li>
      </ul>
      <div className={styles.Container}>
        <div className={styles.PhotoArea}>
          <img
            className={styles.AvatarImage}
            src={window.location.origin + '/Dickson.jpg'}
            width={160}
            height={160}
          />
        </div>
        <div className={styles.BioArea}>
          <h1>Dickson Souza</h1>
          <p className={styles.Paragraph}>I am a metallurgical engineer!
            Coding and software development,
            however, is on my life
            for a long time!</p>
          <p className={styles.Paragraph}>
            It all started as curiosity and it is gradually becoming something
            more serious along the years, including a specialization course at PUC Minas on
            Software Engineering
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomHeader;
