import CartaBlog from "../CartaBlog/CartaBlogDesktop"
import style from "./blog.module.css"

export default function BlogDesktop(){
    return(
        <div className={style.blog}>
            <CartaBlog/>
        </div>
    )
} 