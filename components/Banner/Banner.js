import style from "./banner.module.css"
import Image from 'next/image'

export default function Banner(){
    return(
        <div className={style.imagenDeFondo}>
            <div className={style.icono}>
                <Image src='/Assets/iconos/ic_pin.png' alt='logo' width={120} height={170}></Image>
                <h1>AMERICA DEL SUR</h1>
            </div>
            <p className={style.texto1}>Lugares maravillosos por</p>
            <p className={style.texto2}>America del Sur</p>
            <p className={style.textoDesktop}>Estos son algunos lugares que eligen la mayoria de los turistas que visitan América del Sur.</p>
            <div className={style.imagenVideo}>
                <Image src='/Assets/iconos/Nav_slider.png' alt='nav-slider' width={87} height={50}></Image>
            </div>
        </div>
    )
}
