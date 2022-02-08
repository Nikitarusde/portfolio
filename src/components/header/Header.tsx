import React from 'react';
import styles from "./Header.module.css"
import {NavBar} from "./navBar/NavBar";

export const Header = () => {
    return (
        <header className={styles.headerBox}>
            <div className={styles.container}>
                <NavBar/>
            </div>

        </header>
    );
};
