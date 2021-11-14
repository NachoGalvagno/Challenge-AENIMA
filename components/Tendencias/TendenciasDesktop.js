import CartaTendenciaDesktop from "../CartaTendencia/CartaTendenciaDesktop"
import style from "./tendenciasDesktop.module.css"


export default function Tendencias(){
    return(
        <div className={style.main}>
            <h1 className={style.titulo1} id="tendencias">TENDENCIAS</h1>
            <CartaTendenciaDesktop/>   
            <h1 className={style.titulo2} id="blog">BLOG</h1>
        </div>
    ) 
}  