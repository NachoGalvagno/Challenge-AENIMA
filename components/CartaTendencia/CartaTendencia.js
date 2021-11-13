import style from './cartaTendencia.module.css'
import Image from 'next/image'

export default function CartaTendencia(){
    return(
        <div className={style.cartaTendencia}>
            <Image src='/Assets/img/card_01.png' alt="carta" width={286} height={180}></Image>
        </div>
    )
}