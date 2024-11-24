import React, { useEffect, useRef } from "react";
import styles from "./servicesMenu.module.scss";
import { Link } from "react-router-dom";
import { servicesMenu } from "../../../data/servicesMenu";
import arrow from "../../../assets/images/services/arrow.svg";
import classNames from "classnames";

const ServicesMenu = ({ setIsServicesOpen }) => {
  const servicesMenuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        servicesMenuRef.current &&
        !servicesMenuRef.current.contains(event.target)
      ) {
        closeServicesMenu();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const closeServicesMenu = () => {
    setIsServicesOpen(false);
  };
  return (
    <div className={styles.servicesMenu} ref={servicesMenuRef}>
      <div className={styles.servicesBox}>
        {servicesMenu.map((servicesMenuItem, index) => {
          return (
            <div key={index} className={styles.serviceCard}>
              <img
                className={styles.serviceImg}
                src={servicesMenuItem.img}
                alt={servicesMenuItem.title}
              />
              <h4 className={styles.serviceTitle}>{servicesMenuItem.title}</h4>
              <p className={styles.serviceSubText}>
                {servicesMenuItem.subText}
              </p>
              <ul className={styles.servicesMenuList}>
                {servicesMenuItem.items.map((itemList, indexList) => {
                  return (
                    <li className={styles.serviceListItem} key={indexList}>
                      {itemList}
                    </li>
                  );
                })}
              </ul>
              <Link className={classNames("main-btn", styles.linkBox )} to={servicesMenuItem.link}>
                <span className={styles.explore}>explore</span>
                <span className={styles.linkText}>
                  {servicesMenuItem.linkText}
                </span>
                <img src={arrow} alt="arrow" />
              </Link>
              <div className={styles.divider}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesMenu;
