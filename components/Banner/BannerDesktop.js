import style from "./bannerDesktop.module.css"
import Image from 'next/image' 

export default function BannerDesktop(){
    return(
        <div className={style.imagenDeFondo}>
            <div className={style.containerTexto}>
                <div className={style.icono}>
                    <Image src='/Assets/iconos/ic_pin.png' alt='logo' width={24} height={34}></Image>
                    <h1>AMERICA DEL SUR</h1>
                </div>
                <p className={style.texto1}>Lugares maravillosos por America del Sur.</p>
                <p className={style.texto2}>Estos son algunos de los lugares que elijen la mayoría de los turistas que visitan América del Sur.</p>
            </div>
            <div className={style.imagenVideo}>
                <Image src='/Assets/iconos/nav-slider-desktop.png' alt='nav-slider' width={189} height={60}></Image>
            </div>
            <div className={style.cuadroPromocion}> 
                <div className={style.flex}>
                    <p className={style.titulo}>PRÓXIMA AVENTURA</p>
                    <Image src='/Assets/iconos/arrow.png' alt='arrow' width={6} height={10}></Image>
                </div>
                <p className={style.subtitulo}>Europa Meridional</p>
                <p className={style.texto}>Forman parte veinte países, ej. España, Francia, etc.</p>
            </div>
        </div>
    ) 
} 