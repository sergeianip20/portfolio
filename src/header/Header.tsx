import React from 'react';
import styles from './Header.module.css'
import {Nav} from './nav/Nav'

const  Header = (props:any)=>  {
    return (
        <div className={styles.header}>

            <Nav />
        </div>
    );
}

export default Header;