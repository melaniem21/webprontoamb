import React, {useState, useEffect} from "react";
import './ImageSlider.css';

const ImageSlider = ({images, interval = 3000}) => {
    const [currentIndex, setCurrentIndex] = useState (0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);  
        return() => {
        clearInterval(timer);
        };
     }, [images, interval]); 
    

    return(
        <div className="slider-container">
            {images.length > 0 && (<img src={images[currentIndex]} alt={`Slider Image ${currentIndex + 1}`} className= "slider-image"/>)}
        </div>
    ); 
};

export default ImageSlider;