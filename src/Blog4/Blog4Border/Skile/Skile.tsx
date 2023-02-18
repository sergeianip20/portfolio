import React from 'react';
import styles from './Skile.module.css';
export const Skile = () => {
    return(
        <div className={styles.skile}>
            <div className={styles.see}>
                <button> Смотреть</button>{' '}
            </div>
            <div className={styles.descrition}>
                <div className={styles.name}>
                    {' '}
                    <span className={styles.span}> Название проекта</span>{' '}
                </div>
                <div className={styles.descr}> краткое описание </div>
            </div>
        </div>
    );
};
