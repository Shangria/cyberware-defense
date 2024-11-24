import React from 'react';
import styles from "./Services.module.scss"
import {servicesHomeData} from "../../../../data/servicesHome";

const Services = () => {
    return (
        <div className={styles.servicesBox}>
            <div className="container">
                <h2>Services</h2>
                <div className={styles.servicesContainer}>
                    {
                        servicesHomeData.map((item, index) => {
                            return (
                                <div key={index} className={styles.serviceItem}>
                                    <img src={item.img} alt={item.title}/>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                    <a className={"main-btn"} href={item.link}>{item.btn}</a>
                                </div>

                            )
                        })
                    }
                </div>
            </div>

        </div>
    );
};

export default Services;