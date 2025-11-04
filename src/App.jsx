import { useState } from 'react'
import './App.css'
import Header  from './Header.jsx';
import ImageSlider from './ImageSlider.jsx';
import logo1 from './img/logo.png';
import img1 from './img/ambulancia1.png';
import img2 from './img/ambulancia2.jpg';
import img3 from './img/paramedicos.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmbulance, faHeart, faHospital, faHouseMedicalCircleCheck, faKitMedical } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [mensaje, setMensaje] = useState('Bienvenido a Pronto Ambulancias');
  const sliderImages = [img1, img2, img3];

  return (
    <>
    <Header />
    <div className="imgambu"> 
      <div className='inicio'>
        <h1>{mensaje}</h1>
       <h2>Al cuidado de su vida en todo momento...</h2>
      </div>
      <div className="columna-der-texto">
          <p>Somos una empresa de ambulancias aliadas en toda Caracas, buscamos ofrecerte 
            un servicio de ambulancias al alcance de un solo click, encontramos la 
            ambulancia más cercana a tu ubicación para evitar demoras en tiempo 
            crucial, atenderte y cuidarte es nuestra prioridad ¡en todo momento!
            <p>
            Contamos con un equipo de paramédicos altamente calificados, además proveemos
            distintos tipos de servicios y especialidades para cubrir todas tus necesidades
            y las de tus seres queridos.
          </p></p>

          
        </div>
      <ImageSlider images={sliderImages} interval={4000} />
      
      

      <div className= "contenedor-padre"> 
      
        <div className="columna-izq">
          <img src={logo1} alt="imagen" className= "logo1" />
        </div>
        
      </div>
      </div>
      <div className="servicios">
       <h1>Nuestros Servicios</h1>
      </div>
      <div className='columservicios'>
        <div className= "columndesc">

          <button className="boton-servicio">
            <FontAwesomeIcon icon={faAmbulance} size="4x" />
          </button>
          <h2>Atención Inmediata</h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum repellat quaerat dolores. Sequi consectetur alias eos molestias velit, ex sit delectus eveniet rem vel repellat unde. A maiores blanditiis architecto.
        </div>
        <div className= "columndesc">
          <button className="boton-servicio">
            <FontAwesomeIcon icon={faHeart} size="4x" />
          </button>
          <h2>Seguridad para tu Familia</h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae quae quas sit cumque dolor assumenda doloremque eius at repellat earum facilis nisi exercitationem pariatur aspernatur, eaque eveniet, expedita quibusdam ipsum?
        </div>
        <div className= "columndesc">
          <button className="boton-servicio">
            <FontAwesomeIcon icon={faHouseMedicalCircleCheck} size="4x" />
          </button>
          <h2>En cualquier lugar</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque incidunt asperiores autem libero, maiores odio illum ducimus debitis est repudiandae veritatis iste corporis sit consequuntur fuga ipsum, corrupti, possimus harum?
        </div>

      </div>
    
    <div className='espacio'></div>

      <div className="contenedor-afil1">
        <div className = "contenedor-afil2">
          <h1>¿Deseas Afiliarte?</h1>
          <h2>¡Llena el formulario!</h2>
          <div >
            <button className="boton-servicio">Enviar</button>
          </div>
        </div>
      </div>

      <div className="contenedor-contacto">
        <div className="contacto">
          <h2>Siguenos en nuestras redes</h2>
        </div>
      </div>
      
  </>
  )
}

export default App
