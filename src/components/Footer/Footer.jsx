import styles from "./Footer.module.scss";
import FooterForm from "./FooterForm";
import footerImg1 from "../../assets/images/footer/1.svg";
import footerImg2 from "../../assets/images/footer/2.svg";
import footerImg3 from "../../assets/images/footer/3.svg";
import footerImg4 from "../../assets/images/footer/4.svg";
import locationIcon from "../../assets/images/footer/location-icon.svg";
import emailIcon from "../../assets/images/footer/email-icon.svg";
import phoneIcon from "../../assets/images/footer/phone-icon.svg";
import map from "../../assets/images/footer/maps.png";
import classNames from "classnames";
import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className={styles.footerTopBg}>
                <div className="container">
                    <div className={styles.footerTop}>
                        <div className={styles.logosBox}>
                            <img className={styles.topImg} src={footerImg1} alt="logo"/>
                            <div className={styles.logosContainer}>
                                <img src={footerImg2} alt="logo"/>
                                <img src={footerImg3} alt="logo"/>
                            </div>
                            <img src={footerImg4} alt="logo"/>
                        </div>


                        <div className={styles.mainBox}>
                            <div className={styles.linksWrap}>
                                <ul className={classNames(styles.linksBox, styles.linksBoxSpace)}>
                                    <li className={styles.linksTitle}>Services</li>
                                    <li className={styles.linkItem}>
                                        <Link to={"/"}>SIEM - 24/7 Threat Monitoring</Link></li>
                                    <li className={styles.linkItem}>
                                        <Link to={"/"}>Penetration Testing</Link>
                                    </li>
                                    <li className={styles.linkItem}>
                                        <Link to={"/"}>Incident Management</Link>
                                    </li>
                                    <li className={styles.linkItem}>
                                        <Link to={"/"}>Compliance & Risk Management</Link>
                                    </li>
                                    <li className={styles.linkItem}>
                                        <Link to={"/"}>Security Awareness Training</Link>
                                    </li>
                                </ul>
                                <div>
                                    <ul className={classNames(styles.linksBox, styles.linksBoxSpace)}>
                                        <li className={styles.linksTitle}>About Us</li>
                                        <li className={styles.linkItem}>
                                            <a target="_blank" href={""}>Mission Statement</a>
                                        </li>
                                        <li className={styles.linkItem}>
                                            <a target="_blank" href={""}>Our Story</a>
                                        </li>
                                        <li className={styles.linkItem}>
                                            <a target="_blank" href={""}>Our Expertise</a>
                                        </li>
                                        <li className={styles.linkItem}>
                                            <a target="_blank" href={""}>Partnerships</a>
                                        </li>
                                    </ul>
                                    <ul className={styles.linksBox}>
                                        <li className={styles.linksTitle}>
                                            <a target="_blank" href={""}>Our Values</a>
                                        </li>
                                        <li className={styles.linkItem}>
                                            <a target="_blank" href={""}>Innovation</a>
                                        </li>
                                        <li className={styles.linkItem}>
                                            <a target="_blank" href={""}>Trust</a>
                                        </li>
                                        <li className={styles.linkItem}>
                                            <a target="_blank" href={""}>Excellence</a>
                                        </li>
                                        <li className={styles.linkItem}>
                                            <a target="_blank" href={""}>Collaboration</a>

                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <ul className={styles.linksBox}>
                                        <li className={styles.linksTitle}>Team</li>
                                        <li className={styles.linkItem}>
                                            <a target="_blank" href={""}>Co-Founder & CXX</a>
                                        </li>
                                        <li className={styles.linkItem}>
                                            <a target="_blank" href={""}>Cybersecurity Specialists</a>
                                        </li>
                                        <li className={styles.linkItem}>
                                            <a target="_blank" href={""}>Security Awareness Advisors</a>
                                        </li>
                                    </ul>
                                    <ul className={styles.linksBox}>
                                        <li className={styles.linksTitle}>
                                            <a target="_blank" href={""}>Industries We Serve</a>
                                        </li>
                                        <li className={styles.linkItem}>
                                            <a target="_blank" href={""}>Finance</a>
                                        </li>
                                        <li className={styles.linkItem}>
                                            <a target="_blank" href={""}>Healthcare</a>
                                        </li>
                                        <li className={styles.linkItem}>
                                            <a target="_blank" href={""}>Government</a>
                                        </li>
                                        <li className={styles.linkItem}>
                                            <a target="_blank" href={""}>Retail</a></li>
                                        <li className={styles.linkItem}>
                                            <a target="_blank" href={""}>eGame</a></li>
                                        <li className={styles.linkItem}>
                                            <a target="_blank" href={""}>Education</a></li>

                                    </ul>
                                </div>
                            </div>
                            <div className={styles.contactBox}>
                                <h3 className={styles.title}>
                                    Contact <span>us</span>
                                </h3>
                                <div className={styles.contactContainer}>
                                    <FooterForm/>
                                    <div className={styles.contactInfo}>
                                        <img className={styles.mapImg} src={map} alt="map"/>
                                        <address className={styles.address}>
                                            <img className={styles.icon} src={locationIcon} alt="location icon"/>
                                            <span>Berlin, Germany</span>
                                        </address>
                                        <div className={styles.phone}>
                                            <img className={styles.icon} src={phoneIcon} alt="phone icon"/>
                                            <a href="tel:000111222333">000111222333</a>
                                        </div>

                                        <div className={styles.email}>
                                            <img className={styles.icon} src={emailIcon} alt="email icon"/>
                                            <a href="mailto:info@cybergd.com">info@cybergd.com</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div className={styles.footerBottom}>
                    <div className="container">
                        <div className={styles.footerBottomBox}>
                            <ul className={styles.footerBottomLeft}>
                                <li>
                                    <a target="_blank" href="">
                                        Legal Notice
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="">Data Protection
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="">
                                        Terms of Use
                                    </a>
                                </li>
                            </ul>
                            <p className={styles.footerBottomRight}>
                                ©Cyberware Global Defense
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;
