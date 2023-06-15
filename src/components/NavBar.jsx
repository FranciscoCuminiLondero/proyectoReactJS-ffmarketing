import React from 'react';
import CartWidget from './CartWidget';

export const NavBar = () => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className='container'>    
                <div className='name'>
                    <h1><a className="navbar-brand" href="#">FFMarketing</a></h1>
                </div>
                <div id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Nosotros</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Servicios</a></li>
                    </ul>
                </div>
                <div className='cart'>
                    <CartWidget /> 0
                </div>
            </div>
        </nav>
    </header>
)