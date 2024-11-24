import React from 'react';
import styles from "./WhoWeAre.module.scss";
import {whoWeAreData} from "./whoWeAreData";

const WhoWeAre = () => {
    return (
        <div className={styles.whoWeAreWrap}>
            <div className="container">
                <h2>Who We Are</h2>
                <p className={styles.text}>At Cyberware Global Defense (CGD), we are committed to protecting the digital future through
                    innovative solutions that safeguard businesses from evolving cyber threats. Our expert team combines
                    cutting-edge technology with a proactive approach to cybersecurity, ensuring that your organization
                    remains secure, compliant, and resilient in the face of emerging challenges.</p>

                <div className={styles.whoWeAreItemsBox}>
                    {
                        whoWeAreData.map((item, index)=>{
                            return (
                                <div className={styles.whoWeAreItem}>
                                    <img src={item.img} alt={item.text}/>
                                    <p dangerouslySetInnerHTML={{__html: item.text}}/>
                                </div>

                            )
                        })
                    }

                </div>
            </div>

        </div>
    );
};

export default WhoWeAre;