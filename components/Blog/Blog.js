import CartaBlog from "../CartaBlog/CartaBlog"
import style from "./blog.module.css"

export default function Blog(){
    return(
        <div className={style.blog}>
            <CartaBlog/>
        </div>
    )
} 