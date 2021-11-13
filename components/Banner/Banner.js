import style from "./banner.module.css"
import Image from 'next/image'

export default function Banner(){
    return(
        <div className={style.imagenDeFondo}>
            <div className={style.icono}>
                <Image src='/Assets/iconos/ic_pin.png' alt='logo' width={10} height={10}></Image>
                <h1>AMERICA DEL SUR</h1>
            </div>
        </div>
    )
}