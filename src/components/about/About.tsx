import React from 'react';
import styles from "./About.module.css"
import {Skills} from "./skills/Skills";

export const About = () => {
    return (
        <div className={styles.aboutBox}>
            <div className={styles.container}>
              <h2 className={styles.containerTitle}>About Котиках</h2>
                <div className={styles.containerSkills}>
                    <Skills/>
                    <Skills/>
                    <Skills/>
                </div>

            </div>
        </div>
    );
};
