import CartaTendenciaDesktop from "../CartaTendencia/CartaTendenciaDesktop"
import style from "./tendencias.module.css"


export default function Tendencias(){
    return(
        <div className={style.main}>
            <h1 className={style.titulos} id="tendencias">TENDENCIAS</h1>
            <CartaTendenciaDesktop/>   
            <h1 className={style.titulos} id="blog">BLOG</h1>
        </div>
    ) 
} 