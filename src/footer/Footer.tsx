import s from './Footer.module.css'
import {FooterBlack} from "./FooterBlack/FooterBlack";

export const Footer = () => {
    return <div className={s.footer}>
        <div className={s.footer_item}>
            <FooterBlack/>
            <FooterBlack/>
            <FooterBlack/>
            <FooterBlack/>

        </div>
    </div>
}