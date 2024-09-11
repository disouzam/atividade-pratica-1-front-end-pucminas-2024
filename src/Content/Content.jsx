import React from 'react';
import styles from './Content.module.css';

const Content = () => {
  return (
    <div className={styles.Container}>
      <h1>Latest blog posts</h1>
      <h2>
        <a
          href="https://www.linkedin.com/pulse/01-curating-information-promote-learning-dickson-alves-de-souza"
          target="_blank"
          rel="noopener noreferrer"
        >
          Curating information and promote learning
        </a>
      </h2>
      <p>
        <b>Information overload</b>, i.e., the widespread notion
        that we can&apos;t grasp everything in the information environment and <i>FOMO</i>&nbsp;
        are closely interconnected. Curating information can help.
        <a
          href="https://www.linkedin.com/pulse/01-curating-information-promote-learning-dickson-alves-de-souza"
          target="_blank"
          rel="noopener noreferrer"
        >
          <br />Read more...
        </a>
      </p>

      <h2>
        <a
          href="https://www.linkedin.com/pulse/02-slags-dickson-alves-de-souza"
          target="_blank"
          rel="noopener noreferrer"
        >
          Role of slags in metallurgy
        </a>
      </h2>
      <p>
        Slags, while a chemical by-product in metallurgy,
        play important roles in metal refining.
        Understanding them is essential for producing
        several metals and alloys, like steels,
        copper and even silicon used to make chips. <br />
        <a
          href="https://www.linkedin.com/pulse/02-slags-dickson-alves-de-souza"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more...
        </a>
      </p>

      <h2>
        <a
          href="https://www.linkedin.com/posts/disouzam_eaf-steelmaking-example-charging-optimization-activity-7224843565531619328-aWZA/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Using mathematical optimization in steelmaking
        </a>
      </h2>
      <p>
        This post shows a teaching example of
        how to use OR-Tools to optimize
        a meltshop operation in steelmaking.
        <br />
        <a
          href="https://www.linkedin.com/posts/disouzam_eaf-steelmaking-example-charging-optimization-activity-7224843565531619328-aWZA/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more...
        </a>
      </p>

    </div>
  );
};

export default Content;
