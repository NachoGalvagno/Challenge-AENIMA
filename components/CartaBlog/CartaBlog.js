import style from './cartaBlog.module.css'
import Image from 'next/image'

export default function CartaBlog(){
    return(
        <div className={style.cartaBlog} style={backgroundImage=url('/Assets/img/articulo_big_01.png')}>
            <h1 className={style.titulo}>CIUDAD</h1>
            <h1 className={style.subtitulo}>Artículo de puente</h1>
            <Image src='/Assets/iconos/time.png' alt="reloj" width={16} height={16}></Image>
            <p className={style.textoReloj}>Hace 2m</p>
        </div>
    )
}