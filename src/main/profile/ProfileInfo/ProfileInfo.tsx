import styles from './ProfileInfo.module.css'
import {Name} from "./Name/Name";

export const ProfileInfo=()=> {
    return(
        <div className={styles.profileInfo}>
<Name  />
        </div>
    )
}