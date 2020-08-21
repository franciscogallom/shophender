import React, { useState} from "react";

import { NavLink } from "react-router-dom";

import "./navbar.scss";

import cartIcon from '../../assets/img/cart.svg'
import menuIcon from '../../assets/img/menu.svg'

const NavBar = () => {

    const [open, setOpen] = useState(!(window.screen.width < 1024))
    // En version mobile y tablet, el valor inicial de open es false. Por lo tanto el menu iniciara cerrado.
    // En version desktop, open es true, y esto me permite mostrar los items del menu.

    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <img 
                        className='menu-icon-img'
                        onClick={() => {
                            // Esta funcion solo se tiene que ejecutar en version mobile y tablet.
                            window.screen.width < 1024 && setOpen(!open)}} 
                        src={menuIcon} 
                        alt="Menu"
                    />
                    {   
                        // Si open es true, muestro las cateogiras de productos.
                        open &&
                            <ul 
                                onClick={() => {
                                    // Esta funcion solo se tiene que ejecutar en version mobile y tablet.
                                    window.screen.width < 1024 && setOpen(!open)}} 
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
                        onClick={() => {
                            // Esta funcion solo se tiene que ejecutar en version mobile y tablet.
                            // No puede abrir el menu, pero si cerrarlo.
                            window.screen.width < 1024 && setOpen(open && false)}}
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
                        <img src={cartIcon} alt="Cart"/>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;