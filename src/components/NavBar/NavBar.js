import React, { useState} from "react";

import { NavLink } from "react-router-dom";

import "./navbar.scss";

import menuIcon from '../../assets/img/menu.svg'

import CartIcon from '../CartIcon/CartIcon'

const NavBar = () => {

    const isMobileOrTablet = window.screen.width < 1024;

    const [open, setOpen] = useState(!(isMobileOrTablet))
    // En version mobile y tablet, el valor inicial de open es false. Por lo tanto el menu iniciara cerrado.
    // En version desktop, open es true, y esto me permite mostrar los items del menu en el NavBar.

    return (
        // En los onClick, setOpen() solo se tiene que ejecutar en version mobile y tablet.

        <nav className='navbar'>
            <ul>
                <li>
                    <img 
                        className='menu-icon-img'
                        onClick={() => {isMobileOrTablet && setOpen(!open)}} 
                        src={menuIcon} 
                        alt="Menu"
                    />
                    {   
                        // Si open es true, muestro las cateogiras de productos. (Funcionalidad para mobile y tablet)
                        open &&
                            <ul 
                                onClick={() => {isMobileOrTablet && setOpen(!open)}} 
                                className='products-category-items'
                            >
                                <li><NavLink to='/products'>HOMBRE</NavLink></li>
                                <li><NavLink to='/products'>MUJER</NavLink></li>
                                <li><NavLink to='/products'>VER TODO</NavLink></li>
                            </ul>
                    }   
                </li>
                <li>
                    <NavLink 
                        to="/" 
                        // No puede abrir el menu, pero si cerrarlo.
                        onClick={() => {isMobileOrTablet && setOpen(open && false)}}
                    >
                        <h1 className='shophender'>shophender</h1>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/cart"
                        className='cart-icon-img' 
                        activeClassName="activeLink"
                    >
                        <CartIcon />
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;