import style from './cartaTendencia.module.css'
import Image from 'next/image'

export default function CartaTendencia(){
    let arrayCartas = [
        {
            url : '/Assets/img/card_01.png',
            titulo : 'Montañas y magia',
            nuevo : true,
            subtitulo : 'Aquí la descripción para Montañas y magia.'
        },
        {
            url : '/Assets/img/card_02.png',
            titulo : 'Playas y sol',
            nuevo  : false,
            subtitulo : 'La descripción de Playas y sol debe ser esta.'
        },
        {
            url : '/Assets/img/card_03.png',
            titulo : 'Nieve y aventura',
            nuevo : false, 
            subtitulo : 'Contiene la información de Nieve y aventura'
        }
    ]
    return(
        <div className={style.displayDeCartas}>
        {
            arrayCartas.map((carta, index) => {
                return(
                    <div className={style.cartaTendencia} key={index}>
                    <Image src={carta.url} alt="carta" width={286} height={180}></Image>
                    <div className={style.textoCarta}>
                        {/* {if(nuevo == true){
                            return(
                                <span className={style.nuevo}>NUEVO</span>
                            )
                        }} */}
                        <h2 className={style.titulo}>{carta.titulo}</h2>
                        <p className={style.subtitulo}>Aquí la descripción para <strong>Montañas y magia</strong></p>
                    </div>
                </div> 
                )
            })
        }
        </div>
    )
} 