import React from 'react';
import styles from "./Project.module.css"

export const Project = () => {
    return (
        <div className={styles.projectBox}>
            <div>
                <img className={styles.image} src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=717&q=80" alt=""/>
                <button>more</button>
            </div>
            <div>
                <h3>Title</h3>
                <span>Description</span>
            </div>
        </div>
    );
};

