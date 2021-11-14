import style from './cartaTendencia.module.css'
import Image from 'next/image'

export default function CartaTendencia(){
    return(
        <div className={style.cartaTendencia}>
            <Image src='/Assets/img/card_01.png' alt="carta" width={286} height={180}></Image>
            <div className={style.textoCarta}>
                <span className={style.nuevo}>NUEVO</span>
                <h2 className={style.titulo}>Montañas y magia</h2>
                <p className={style.subtitulo}>Aquí la descripción para <strong>Montañas y magia</strong></p>
            </div>
        </div> 
    )
}