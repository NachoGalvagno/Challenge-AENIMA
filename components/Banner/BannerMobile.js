import style from "./banner.module.css"
import Image from 'next/image' 

export default function BannerMobile(){
    return(
        <div className={style.imagenDeFondo}>
            <div className={style.icono}>
                <Image src='/Assets/iconos/ic_pin.png' alt='logo' width={12} height={17}></Image>
                <h1>AMERICA DEL SUR</h1>
            </div>
            <p className={style.texto1}>Lugares maravillosos por</p>
            <p className={style.texto2}>America del Sur</p>
            <div className={style.imagenVideo}>
                <Image src='/Assets/iconos/Nav_slider.png' alt='nav-slider' width={87} height={50}></Image>
            </div>
        </div>
    )
}