import React from 'react';
import styles from "./HeroBg.module.scss"

const HeroBg = ({backgroundImage, children}) => {
    return (
        <div className={styles.heroBg}
             style={{ backgroundImage: `url(${backgroundImage})` }}>
            {children}
        </div>
    );
};

export default HeroBg;