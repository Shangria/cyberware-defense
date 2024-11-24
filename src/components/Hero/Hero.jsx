import React from 'react';
import HeroBg from "../HeroBg/HeroBg";
import styles from "./Hero.module.scss";
import freeConsultation from "../../assets/home/free-consultation.svg";
import classNames from "classnames";

const Hero = ({backgroundImage}) => {
    return (
            <HeroBg backgroundImage={backgroundImage}>
                <div className="container">
                        <div className={styles.homeHeroContainer}>
                            <p className={styles.textTop}>
                                Your Cybersecurity Experts <span>Securing the Future Today</span>
                            </p>

                            <h1 className={styles.mainTitle}>Tailored,<span> AI-driven solutions</span> to<br/> protect
                                your
                                business <q className={styles.titleText}>Protecting the digital future through
                                    innovative
                                    cybersecurity
                                    solutions, we empower businesses
                                    to safeguard their assets, ensure compliance, and maintain trust in an increasingly
                                    connected
                                    world.</q></h1>

                            <div className={styles.btnContainer}>
                                <a target="_blank" href="#" className={styles.freeConsultationBtn}>
                                    <img src={freeConsultation} alt="free consultation button"/>
                                    <span>Free Consultation</span></a>
                                <a target="_blank" href="#" className={classNames("main-btn")}>
                                    Get Started Today</a>
                            </div>

                            <div className={styles.linksBottomBox}>
                                <a className={styles.bottomLink} target="_blank" href="#">Finance</a>
                                <a className={styles.bottomLink} target="_blank" href="#">Healthcare</a>
                                <a className={styles.bottomLink} target="_blank" href="#">Government</a>
                                <a className={styles.bottomLink} target="_blank" href="#">Retail</a>
                                <a className={styles.bottomLink} target="_blank" href="#">Game</a>
                                <a className={styles.bottomLink} target="_blank" href="#">Education</a>
                            </div>

                        </div>
                </div>
            </HeroBg>
    );
};

export default Hero;