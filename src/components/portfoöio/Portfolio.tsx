import React from 'react';
import styles from "./Portfolio.module.css"
import {Project} from "./project/Project";

export const Portfolio = () => {
    return (
        <div className={styles.portfolioBox}>
            <div className={styles.container}>
                <h2 className={styles.title}>Portfolio Котиков</h2>
                <div className={styles.project}>
                    <Project/>
                    <Project/>
                </div>
            </div>
        </div>
    );
};

