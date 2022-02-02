import React from 'react';
import styles from "./Skills.module.css"

export const Skills = () => {
    return (
        <div className={styles.skillBox}>
            <div className={styles.container}>
                <img className={styles.image} src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80" alt=""/>
                <div><h3>Title</h3></div>
                <span>description</span>
            </div>

        </div>
    );
};
