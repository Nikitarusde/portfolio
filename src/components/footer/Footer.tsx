import React from 'react';
import styles from "./Footer.module.css"

export const Footer = () => {
    return (
        <footer className={styles.footerBox}>
            <div className={styles.container}>
                <h3 className={styles.name}>Nikita</h3>
                <div className={styles.boxQuadrat}>
                    <div className={styles.quadrat}></div>
                    <div className={styles.quadrat}></div>
                    <div className={styles.quadrat}></div>
                    <div className={styles.quadrat}></div>
                    <div className={styles.quadrat}></div>
                </div>
                <span>2022 Все права котиков защищены</span>
            </div>
        </footer>
    );
};
