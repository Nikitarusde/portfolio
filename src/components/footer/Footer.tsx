import React from 'react';
import styles from "./Footer.module.css"

export const Footer = () => {
    return (
        <div className={styles.footerBox}>
            <div className={styles.container}>
                <h3 className={styles.name}>Nikita</h3>
                <span>2022 Все права котиков защищены</span>
            </div>
        </div>
    );
};
