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
      <ImageSlider images={sliderImages} interval={4000} />
    </div>
      <div className='inicio'>
        <h1>{mensaje}</h1>
       <h2>Al cuidado de su vida en todo momento...</h2>
      </div>

      <div className= "contenedor-padre"> 
        <div className="columna-izq">
          <img src={logo1} alt="imagen" className= "logo1" />
        </div>
        <div className="columna-der">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste iusto veniam sequi natus, ipsam quibusdam dicta voluptas ullam sed iure sunt facilis id vitae aut sapiente tenetur neque soluta blanditiis?</p>
        </div>
      </div>
      <div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Atque exercitationem vel dolorem cum distinctio quo similique officia dolores voluptates, voluptatibus tempore corporis explicabo neque laboriosam accusantium quidem, sequi, ducimus recusandae.</p>
      </div>

      <div>

      </div>
      
  </>
  )
}

export default App
