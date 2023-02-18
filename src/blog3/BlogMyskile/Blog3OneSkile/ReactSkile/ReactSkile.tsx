import React from 'react';
import styles from './ReactSkile.module.css';
export const ReactSkile = ()=> {
    return (
        <div className={styles.reactskile}>
            <div className={styles.item}>
                <div className={styles.icon}> </div>
            </div>
            <div className={styles.item}> React </div>
            <div className={styles.item}> Подробное описания навыка </div>
        </div>
    );
};
