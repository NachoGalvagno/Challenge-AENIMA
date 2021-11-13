import style from "./burgerMenu.module.css"
import { FaBars } from 'react-icons/fa'; 

import Link from "next/link";
import { useState } from "react";

export default function BurgerMenu(){
    const [current,setCurrent] = useState("-1000px");
    
    const toggleMenu = () =>{
        setCurrent(current === "-1000px" ? "-20px" : "-1000px");
    }
    return(
        <div className={style.burgerMenu}>
            <ul className={style.mainList}>
                <li className={style.burgerBtn} onClick={toggleMenu}><FaBars/>
                    <ul>
                        <style jsx>
                            {`
                                ul{
                                    width: 250px;
                                        height: 100vh;
                                        z-index: 100;
                                        background-color: white;
                                        list-style: none;
                                        color: black;
                                        padding: 15px;
                                        position: absolute;
                                        right: ${current};
                                        top: 55px;
                                    transition : all 1s;
                                }
                            `}
                        </style>
                            <Link href="#home" passHref>
                                <li className={style.itemsBurger}>HOME</li> 
                            </Link>
                            <Link href="#tendencias" passHref>
                                <li className={style.itemsBurger}>TENDENCIAS</li> 
                            </Link>
                            <Link href="#blog" passHref>
                                <li className={style.itemsBurger}>BLOG</li>
                            </Link>
                    </ul>
                </li>
            </ul>
        </div>
    )
}