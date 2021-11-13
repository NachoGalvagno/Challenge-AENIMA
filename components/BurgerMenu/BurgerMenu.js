import style from "./burgerMenu.module.css"
import { FaBars } from 'react-icons/fa'; 
import { IoMdClose } from 'react-icons/io'

import Link from "next/link";
import { useState } from "react";

export default function BurgerMenu(){
    const [current,setCurrent] = useState("none");
    
    const toggleMenu = () =>{
        setCurrent(current === "none" ? "block" : "none");
    }
    return(
        <div className={style.burgerMenu}>
            <ul className={style.mainList}>
                <li className={style.burgerBtn} onClick={toggleMenu}><FaBars/>
                    <ul>
                        <style jsx>
                            {`
                                ul{
                                    width: 217px;
                                    height: 100vh;
                                    z-index: 100;
                                    background-color: white;
                                    list-style: none;
                                    color: black;
                                    padding: 15px;
                                    position: absolute;
                                    right: -20px;
                                    display: ${current};
                                    top: 0;
                                    transition : all 1s;
                                    padding-top: 65px;
                                }
                            `}
                        </style>
                            <p className={style.crossBtn} onClick={toggleMenu}><IoMdClose/></p>
                            <Link href="/mobile" passHref>
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