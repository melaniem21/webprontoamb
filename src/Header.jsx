import React from "react";  
import './Header.css';
import logo from './img/logo_2.png';

const Header = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="" className="logo-img"/>
            </div>

            <ul className="nav-links">
                <li>
                    <a href="/">Inicio</a>
                </li>
                <li>
                    <a href="/">Servicios</a>
                </li>
                <li>
                    <a href="/">Afiliate</a>
                </li>
                <li>
                    <a href="/">Contacto</a>
                </li>
            </ul>
        </nav>
    );
};
export default Header;