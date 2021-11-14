import CartaTendencia from "../CartaTendencia/CartaTendencia"
import style from "./tendenciasDesktop.module.css"

export default function TendenciasDesktop(){
    return(
        <div className={style.main}>
            <h1 className={style.titulos} id="tendencias">TENDENCIAS</h1>
            <CartaTendencia/>   
            <h1 className={style.titulos} id="blog">BLOG</h1>
        </div>
    ) 
}