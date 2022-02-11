import React from 'react';
import styles from "./Project.module.css"

export const Project = () => {
    return (
        <div className={styles.projectBox}>
                <div className={styles.image}>
                    <button>more</button>
                </div>
            <div className={styles.boxText}>
                <h3>Title</h3>
                <span>Description</span>
            </div>
        </div>
    );
};

