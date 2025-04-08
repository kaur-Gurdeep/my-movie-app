import React from "react";
import styles from "./About.module.css";
import bannerImage from "../../assets/images/about.jpg"; 

const About = () => {
    return (
      <div className={styles.aboutContainer}>
        <div className={styles.imageOverlayContainer}>
          <img src={bannerImage} alt="MovieVibe banner" className={styles.bannerImage} />
          <div className={styles.overlayText}>
            <h1>Welcome to MovieVibe</h1>
            <p>Discover, explore, and save your favorite movies—all in one place.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;