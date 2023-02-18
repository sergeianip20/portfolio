import styles from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyImage} from "./MyImage/MyImage";


export const  Profile=()=> {
    return(<div className={styles.profile}>
        <div><ProfileInfo /></div>

        <div> <MyImage /> </div>
    </div>)
}