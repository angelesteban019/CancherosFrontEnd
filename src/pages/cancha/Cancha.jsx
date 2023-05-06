import "./cancha.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Cancha = () => {
    const photos = [
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSiOhPfbXJ2lX-e70UN_csCYlGkM-zAnLp5A&usqp=CAU"
    }, 
    {
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSiOhPfbXJ2lX-e70UN_csCYlGkM-zAnLp5A&usqp=CAU"
    }, 
    {
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSiOhPfbXJ2lX-e70UN_csCYlGkM-zAnLp5A&usqp=CAU"
    }, 
    {
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSiOhPfbXJ2lX-e70UN_csCYlGkM-zAnLp5A&usqp=CAU"
    }, 
    {
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSiOhPfbXJ2lX-e70UN_csCYlGkM-zAnLp5A&usqp=CAU"
    }, 
    {
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSiOhPfbXJ2lX-e70UN_csCYlGkM-zAnLp5A&usqp=CAU"
    }, 
   
    ];
    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="canchaContainer">
                <div className="canchaWrapper">
                    <button className="reservaAhora">Reserve ahora!</button>
                    <h1 className="canchaTitle">Campnou</h1>
                    <div className="canchaAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>Mz 2 Barrio Ciudad Dorada</span>
                    </div>
                    <span className="canchaDistance">
                        Excelente localización - 500m from center
                    </span>
                    <span className="canchaPriceHighlight">
                        si alquila por más de 1 hora en esta cancha se le dara un descuento de un 5% en el proximo alquiler
                    </span>
                    <div className="canchaImages">
                        {photos.map(photo=>(
                            <div className="canchaImgWrapper">
                                <img src={photo.src} alt="" className="canchaImg" />
                            </div>
                        ))}
                    </div>
                    <div className="canchaDetails">
                        <div className="canchaDetailsTexts">
                            <h1 className="canchaTitle">
                                Camp Nou
                            </h1>
                            <p className="canchaDesc">
                            Canchas Sintéticas Camp Nou, Armenia, Quindío, Colombia está ubicado en Cra. 6, Armenia, Quindío, Colombia, cerca de este lugar son: Gimnasio SuperGym (630 m), Centro Deportivo Mormones La Castellana (730 m), Edificio Castellana 9 A N 58 (976 m), Pulso Box armenia (1 km), GIMNASIO EQUILIBRIUM FITNESS (1 km).

                            </p>
                            </div>
                            <div className="canchaDetailsPrice">
                                <h1>Perfecta para jugar!</h1>
                                <span>
                                Cancha con reja • luces • tienda • gradas de 30 puestos
                                </span>
                                <h2>
                                    <b>$45.000</b> (1 hora)
                                </h2>
                                <button>Reservar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Cancha