import style from "./headerDesktop.module.css"
import Image from "next/image"
import Link from "next/link";

export default function HeaderDesktop(){ 
    return(
        <div className={style.displayHeader}>
            <div className={style.logo}>
                <Image src="/Assets/logo/logo_01.png" width={102} height={19}></Image>
            </div>
            <div className={style.navBar}>
                 <div className={style.navItems} >
                    <Link href="/desktop" passHref><li className={style.items1} onClick={style.click}>HOME</li></Link>
                    <Link href="#tendencias" passHref><li className={style.items} onClick={style.click}>TENDENCIAS</li></Link>
                    <Link href="#blog" passHref><li className={style.items} onClick={style.click}>BLOG</li></Link>
                </div>
            </div>
        </div> 
    )
} 