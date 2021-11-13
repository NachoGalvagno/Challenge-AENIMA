import style from "./header.module.css"
import Image from "next/image"
import BurgerMenu from "../BurgerMenu/BurgerMenu"


export default function Header(){
    return(
        <div className={style.displayHeader}>
            <div className={style.logo}>
                <Image src="/Assets/logo/logo_01.png" width={102} height={19}></Image>
            </div>
            <div className={style.navBar}>
                <div className={style.navItems}>
                    <li className={style.items}>HOME</li>
                    <li className={style.items}>TENDENCIAS</li>
                    <li className={style.items}>BLOG</li>
                </div>
                <BurgerMenu/>
            </div>
        </div>

    )
}