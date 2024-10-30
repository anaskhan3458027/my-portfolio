import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mohd Anas Khan</h1>
        <p className={styles.description}>
        recently graduate in Computer Science and Engineering from Dr. APJ Abdul Kalam Technical University,
        with a CGPA of 7.5 with expertise in web development, currently focused on Java full-stack development. 
        I have hands-on experience in building projects like e-commerce platforms, weather apps, and virtual mouse applications.
        </p>
        <a href="anaskhan3458027@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a><br></br>
        <a href="/mohdanaskhan_22102024.pdf" className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
