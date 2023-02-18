import styles from './Main.module.css'
import {Profile} from "./profile/Profile";
import {MyImage} from "./profile/MyImage/MyImage";

export const Main=()=> {
    return(
        <div className={styles.main}>
           <div> <Profile /></div>

        </div>
    )
}