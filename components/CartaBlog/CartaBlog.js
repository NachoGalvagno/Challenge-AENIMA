import style from './cartaBlog.module.css'
import Image from 'next/image'

export default function CartaBlog(){
    let urlImagen = "/Assets/img/puente-small.png"
    return(
        <div className={style.cartaBlog} style={{
            backgroundImage: "url(" + `${urlImagen}` + ")",
            width: "100%",
            height:"429",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}>
            <h1 className={style.titulo}>CIUDAD</h1>
            <h1 className={style.subtitulo}>Artículo de puente</h1>
            <div className={style.reloj}>
                <Image src='/Assets/iconos/time.png' alt="reloj" width={16} height={16}></Image>
                <p className={style.textoReloj}>Hace 2m</p>
            </div>
        </div>
    )
}
































