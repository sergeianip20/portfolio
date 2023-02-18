import React from 'react';

import styles from './Blog3MySkile.module.css'
import {Blog3OneSkile} from "./Blog3OneSkile/Blog3OneSkile";
export const Blog3MySkile = () => {
    return(
        <div className={styles.myskile}>
            <div className={styles.name}> </div>
            <div className={styles.skile}>
  <Blog3OneSkile/>   <Blog3OneSkile/>   <Blog3OneSkile/>
            </div>
        </div>
    );
};
