import style from "./banner.module.css"
import Image from 'next/image'

export default function Banner(){
    return(
        <div className={style.imagenDeFondo}>
            <div className={style.icono}>
                <Image src='/Assets/iconos/ic_pin.png' alt='logo' width={12} height={17}></Image>
                <h1>AMERICA DEL SUR</h1>
            </div>
            <p className={style.texto}>Lugares maravillosos por</p>
            <p className={style.texto   }>America del Sur</p>
        </div>
    )
}