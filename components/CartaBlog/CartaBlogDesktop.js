import style from './cartaBlogDesktop.module.css'
import Image from 'next/image'

export default function CartaBlogDesktop(){
    let arrayCartas = [
        {
            url : "/Assets/img/articulo_big_01.png",
            titulo : 'CIUDAD',
            subtitulo : 'Artículo de puente',
            reloj : 'Hace 2m',
            texto : 'Un puente es una construcción que permite salvar un accidente geográfico'
        },
        {
            url : "/Assets/img/articulo_big_02.png",
            titulo : 'AVENTURA',
            subtitulo : 'Artículo de bosque',
            reloj : 'Hace 15m',
            texto : 'Lugar poblado de árboles y arbustos. Área con una importante densidad de'
        }
    ]

    let arrayCartasChicas = [
        {
            url : "Assets/img/articulo_small_01.png",
            subtitulo : 'Artículo de elefante',
            reloj : 'Hace 3h'
        },
        {
            url : "Assets/img/articulo_small_02.png",
            subtitulo : 'Artículo de loro',
            reloj : 'Hace 4h'
        },
        {
            url : "Assets/img/articulo_small_03.png",
            subtitulo : 'Artículo de camino',
            reloj : 'Hace 8h'
        }
    ]

    return(
        <div className={style.displayGeneral}>
            <div className={style.displayLeft}>
                {
                    arrayCartas.map((carta, index)=>{
                        return(
                            <div className={style.cartaBlog} style={{
                                backgroundImage: "url(" + `${carta.url}` + ")",
                                width: "720px",
                                height:"429px",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                marginBottom: "150px",
                            }} key={ index }>
                                <h1 className={style.titulo}>{carta.titulo}</h1>
                                <h1 className={style.subtitulo}>{carta.subtitulo}</h1>
                                <h1 className={style.texto}>{carta.texto}</h1>
                                <div className={style.reloj}>
                                    <Image src='/Assets/iconos/time.png' alt="reloj" width={16} height={16}></Image>
                                    <p className={style.textoReloj}>{carta.reloj}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={style.displayRight}>
                {
                    arrayCartasChicas.map((carta, index)=>{
                        return(
                            <>
                                <div className={style.cartaBlogRight} style={{
                                    backgroundImage: "url(" + `${carta.url}` + ")",
                                    width: "352px",
                                    height:"210px",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    }} key={ index }>
                                </div>
                                <h1 className={style.subtituloRight}>{carta.subtitulo}</h1>
                                <div className={style.relojRight}>
                                    <Image src='/Assets/iconos/time.png' alt="reloj" width={16} height={16}></Image>
                                    <p className={style.textoReloj}>{carta.reloj}</p>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}
