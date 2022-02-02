import React from 'react';
import styles from "./NavBar.module.css"

export const NavBar = () => {
    return (
        <div className={styles.navBarBox}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Portfolio</a>
            <a href="#">Contacts</a>
        </div>
    );
};
