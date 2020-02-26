import React from "react";
import styles from "./hero.module.scss";

const Hero = ({ heading = "Buy your favorite sneakers here" }) => {
  return (
    <section className={styles.hero}>
      <img
        src="https://source.unsplash.com/1200x1200/?sneakers"
        alt="Random snakeaker pic from unsplash"
        className="img-fluid w-100"
      />
      <h1 className="text-white text-center h3">{heading}</h1>
    </section>
  );
};

export default Hero;
