import React from 'react';
import styles from "./Contacts.module.css"

export const Contacts = () => {
    return (
        <div className={styles.contactsBox}>
            <div className={styles.container}>
                <h2 className={styles.title}>Contacts withs Котиком</h2>
                <form action="" className={styles.form}>
                    <input type="text" placeholder={"Name"}/>
                    <input type="text" placeholder={"Vorname"}/>
                    <textarea  className={styles.textarea} name="" id=""></textarea>

                </form>
                <button>Send</button>
            </div>
        </div>
    );
};
