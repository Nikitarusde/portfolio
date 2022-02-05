import React from 'react';
import styles from "./Offer.module.css"

export const Offer = () => {
    return (
        <div className={styles.offerBox}>
            <div className={styles.container}>
                <h2 className={styles.title}>Work with the Котиком</h2>
                <button>Employ</button>
            </div>

        </div>
    );
};
