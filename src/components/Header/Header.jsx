import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo-transparent.svg";
import arrowBlack from "../../assets/icons/arrow-down-black.svg";
import arrowOrange from "../../assets/icons/arrow-down-orange.svg";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import ServicesMenu from "./servicesMenu/servicesMenu";

function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const toggleServicesMenu = () => {
    setIsServicesOpen((prev) => !prev);
  };

  return (
    <header>
      <div className={styles.topBarWrap}>
        <div className={classNames("container", styles.topBar)}>
          <div className={styles.logoBox}>
            <img src={logo} alt="CYBERWARE Global Defence Logo" />
          </div>
          <div className={styles.actions}>
            <button className={styles.actionButton}>
              Emergency Response Plan
            </button>
            <button className={styles.actionButton}>
              <span>Support</span>
              <img src={arrowBlack} alt="arrow-black" />
            </button>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      <div className={styles.navbarWrap}>
        <div className="container">
          <nav className={styles.navbar}>
            <ul className={styles.navLinksRight}>
              <li className={styles.linkWrap}>
                <Link
                  to="/"
                  className={classNames(styles.navLink, {
                    [styles.activeLink]: location.pathname === "/",
                  })}
                >
                  Home
                </Link>
              </li>
              <li className={styles.linkWrap}>
                <Link
                  to="/about-us"
                  className={classNames(styles.navLink, {
                    [styles.activeLink]: location.pathname === "/about-us",
                  })}
                >
                  About Us
                </Link>
              </li>
              <li
                className={classNames(
                  styles.navLink,
                  styles.linkWrapArrow,
                  styles.services,
                  {
                    [styles.activeServices]: isServicesOpen,
                  },
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleServicesMenu();
                }}
              >
                <span className={styles.linkText}>Services</span>
                <img src={arrowOrange} alt="arrow orange " />
              </li>
              <li className={styles.linkWrapArrow}>
                <Link
                  to="/industries"
                  className={classNames(styles.navLink, {
                    [styles.activeLink]: location.pathname === "/industries",
                  })}
                >
                  <span className={styles.linkText}>Industries</span>
                  <img src={arrowOrange} alt="arrow orange " />
                </Link>
              </li>
              <li className={styles.linkWrapArrow}>
                <Link
                  to="/partnerships"
                  className={classNames(styles.navLink, {
                    [styles.activeLink]: location.pathname === "/partnerships",
                  })}
                >
                  <span className={styles.linkTextMinSpace}>Partnerships</span>
                  <img src={arrowOrange} alt="arrow orange " />
                </Link>
              </li>
            </ul>
            <ul className={styles.navLinksLeft}>
              <li className={styles.linkWrap}>
                <Link
                  to="/contact-us"
                  className={classNames(styles.navLink, styles.contactButton, {
                    [styles.activeLink]: location.pathname === "/contact-us",
                  })}
                >
                  Contact
                </Link>
              </li>
              <li className={styles.linkWrap}>
                <Link
                  to="/jobs"
                  className={classNames(styles.navLink, {
                    [styles.activeLink]: location.pathname === "/jobs",
                  })}
                >
                  Jobs
                </Link>
              </li>
              <li className={styles.linkWrap}>
                <Link
                  to="/newsletter"
                  className={classNames(styles.navLink, {
                    [styles.activeLink]: location.pathname === "/newsletter",
                  })}
                >
                  Newsletter
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {isServicesOpen && <ServicesMenu setIsServicesOpen={setIsServicesOpen} />}
    </header>
  );
}

export default Header;
