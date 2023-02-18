import styles from './Nav.module.css'

export const Nav=()=> {
    return (
        <div className={styles.nav}>
            <a> Главная </a>
            <a> Скиллы</a>
            <a> Работы</a>
            <a> Контакты</a>
        </div>
    )
}