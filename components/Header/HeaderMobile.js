import style from "./header.module.css"
import Image from "next/image"
import BurgerMenu from "../BurgerMenu/BurgerMenu"

export default function HeaderMobile(){ 
    return(
        <div className={style.displayHeader}>
            <div className={style.logo}>
                <Image src="/Assets/logo/logo_01.png" width={102} height={19}></Image>
            </div>
            <div className={style.navBar}>
                <BurgerMenu/>
            </div>
        </div>
    )
}