import React from 'react';
import styles from "./Main.module.css"

export const Main = () => {
    return (
        <div className={styles.mainBox}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <p>Hallo!</p>
                    <h1>Я котик, ты котик</h1>
                    <p>будем котиками вместе</p>
                </div>
                <div className={styles.photo} ></div>
                {/*<img  className={styles.image} src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt=""/>*/}

            </div>
        </div>
    );
};

