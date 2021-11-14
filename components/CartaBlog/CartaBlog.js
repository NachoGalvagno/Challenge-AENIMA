import style from './cartaBlog.module.css'
import Image from 'next/image'

export default function CartaBlog(){
    let arrayCartas = [
        {
            url : "/Assets/img/puente-small.png",
            titulo : 'CIUDAD',
            subtitulo : 'Artículo de puente',
            reloj : 'Hace 2m'
        },
        {
            url : "/Assets/img/articulo_big_02.png",
            titulo : 'AVENTURA',
            subtitulo : 'Artículo de bosque',
            reloj : 'Hace 15m'
        }
    ]
    return(
        <>
        {
            arrayCartas.map((carta, index)=>{
                return(
                    <div className={style.cartaBlog} style={{
                        backgroundImage: "url(" + `${carta.url}` + ")",
                        width: "100%",
                        height:"429px",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        marginBottom: "150px",
                      }} key={ index }>
                        <h1 className={style.titulo}>{carta.titulo}</h1>
                        <h1 className={style.subtitulo}>{carta.subtitulo}</h1>
                        <div className={style.reloj}>
                            <Image src='/Assets/iconos/time.png' alt="reloj" width={16} height={16}></Image>
                            <p className={style.textoReloj}>{carta.reloj}</p>
                        </div>
                    </div>
                )
            })
        }
        </>
    )
}
































