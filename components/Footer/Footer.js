import style from './footer.module.css'
import Image from 'next/image'

export default function Footer(){
    return(
        <div className={style.displayFooter}>
            <div className={style.logoFooter}>
                <Image src="/Assets/logo/logo_02.png" alt="logo" width={70} height={13}></Image>
            </div>
            <div className={style.iconos}>
                <Image src="/Assets/iconos/instagram.png" alt="instagram" width={16} height={16}></Image>
                <Image src="/Assets/iconos/facebook.png" alt="facebook" width={16} height={16}></Image>
            </div>
        </div>
    )
}