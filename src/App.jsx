import { useState } from 'react'
import './App.css'
import Header  from './Header.jsx';
import ImageSlider from './ImageSlider.jsx';
import logo1 from './img/logo.png';
import img1 from './img/ambulancia1.png';
import img2 from './img/ambulancia2.jpg';
import img3 from './img/paramedicos.jpg';

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
      <ImageSlider images={sliderImages} interval={4000} />
      
    
      

      <div className= "contenedor-padre"> 
        <div className="columna-izq">
          <img src={logo1} alt="imagen" className= "logo1" />
        </div>
        <div className="columna-der-texto">
          <p>Somos una empresa de ambulancias aliadas en toda Caracas, buscamos ofrecerte 
            un servicio de ambulancias al alcance de un solo click, encontramos la 
            ambulancia más cercana a tu ubicación para evitar demoras en tiempo 
            crucial, atenderte y cuidarte es nuestra prioridad ¡en todo momento!</p>

          <p>
            Contamos con un equipo de paramédicos altamente calificados, además proveemos
            distintos tipos de servicios y especialidades para cubrir todas tus necesidades
            y las de tus seres queridos.
          </p>
        </div>
      </div>
      </div>
      <div>
       
      </div>
    

      <div>

      </div>
      
  </>
  )
}

export default App
