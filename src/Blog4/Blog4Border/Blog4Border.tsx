import styles from './Blog4Border.module.css'
import {Job} from "./Job/Job";
import {Skile} from "./Skile/Skile";

export const Blog4Border=()=>{
    return(
        <div className={styles.border}>
            <div className={styles.job}>
  <Job />
            </div>
            <div className={styles.faile}>
<Skile /> <Skile />
            </div>
        </div>
    );
};
