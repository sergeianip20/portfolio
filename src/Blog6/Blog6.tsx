import s from './Blog6.module.css'

export const Blog6=()=> {
    return <div className={s.blog6}>
        <div className={s.blog6_title}><div className={s.title}> Контакты </div> </div>
        <div className={s.blog6_form}>

         <form>
             <div className={s.blog6_form1} >
             <input  className={s.blog6_input}/>
             </div>
             <div> <input className={s.blog6_input}/></div>
            <div> <textarea className={s.blog6_textarea}/></div>



         </form>

        </div>
        <div className={s.blog6_button}> <button>Отправить</button>  </div>
    </div>
}