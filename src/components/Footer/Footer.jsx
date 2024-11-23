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
                                    <li className={styles.linkItem}>SIEM - 24/7 Threat Monitoring</li>
                                    <li className={styles.linkItem}>Penetration Testing</li>
                                    <li className={styles.linkItem}>Incident Management</li>
                                    <li className={styles.linkItem}>Compliance & Risk Management</li>
                                    <li className={styles.linkItem}>Security Awareness Training</li>
                                </ul>
                                <div className={styles.linksContainer}>
                                    <ul className={styles.linksBox}>
                                        <li className={styles.linksTitle}>About Us</li>
                                        <li className={styles.linkItem}>Mission Statement</li>
                                        <li className={styles.linkItem}>Our Story</li>
                                        <li className={styles.linkItem}>Our Expertise</li>
                                        <li className={styles.linkItem}>Partnerships</li>
                                    </ul>
                                    <ul className={styles.linksBox}>
                                        <li className={styles.linksTitle}>Our Values</li>
                                        <li className={styles.linkItem}>Innovation</li>
                                        <li className={styles.linkItem}>Trust</li>
                                        <li className={styles.linkItem}>Excellence</li>
                                        <li className={styles.linkItem}>Collaboration</li>
                                    </ul>
                                </div>

                                <div className={styles.linksContainer}>
                                    <ul className={styles.linksBox}>
                                        <li className={styles.linksTitle}>Team</li>
                                        <li className={styles.linkItem}>Co-Founder & CXX</li>
                                        <li className={styles.linkItem}>Cybersecurity Specialists</li>
                                        <li className={styles.linkItem}>Security Awareness Advisors</li>
                                    </ul>
                                    <ul className={styles.linksBox}>
                                        <li className={styles.linksTitle}>Industries We Serve</li>
                                        <li className={styles.linkItem}>Finance</li>
                                        <li className={styles.linkItem}>Healthcare</li>
                                        <li className={styles.linkItem}>Government</li>
                                        <li className={styles.linkItem}>Retail</li>
                                        <li className={styles.linkItem}>eGame</li>
                                        <li className={styles.linkItem}>Education</li>

                                    </ul>
                                </div>
                            </div>
                            <div className={styles.contactBox}>
                                <FooterForm/>
                                <div className={styles.contactInfo}>
                                    <img className={styles.mapImg} src={map} alt="map"/>
                                    <address className={styles.address}>
                                        <img src={locationIcon} alt="location icon"/>
                                        <span>Berlin, Germany</span>
                                    </address>
                                    <div className={styles.phone}>
                                        <img src={phoneIcon} alt="phone icon"/>
                                        <a href="tel:000111222333">000111222333</a>
                                    </div>

                                    <div className={styles.email}>
                                        <img src={emailIcon} alt="email icon"/>
                                        <a href="mailto:info@cybergd.com">info@cybergd.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={styles.footerBottom}>

                </div>

            </div>

        </footer>
    );
};

export default Footer;
