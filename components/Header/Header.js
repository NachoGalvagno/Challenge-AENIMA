import style from "./header.module.css"
import Image from "next/image"
import BurgerMenu from "../BurgerMenu/BurgerMenu"
import Link from "next/link";

export default function Header(){ 
    return(
        <div className={style.displayHeader}>
            <div className={style.logo}>
                <Image src="/Assets/logo/logo_01.png" width={102} height={19}></Image>
            </div>
            <div className={style.navBar}>
                <div className={style.navItems}>
                    <Link href="/desktop" passHref><li className={style.items}>HOME</li></Link>
                    <Link href="#tendencias" passHref><li className={style.items}>TENDENCIAS</li></Link>
                    <Link href="#blog" passHref><li className={style.items}>BLOG</li></Link>
                </div>
                <BurgerMenu/>
            </div>
        </div>
 
    )
}