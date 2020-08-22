import React, { useState} from "react";

import { NavLink } from "react-router-dom";

import "./navbar.scss";

import menuIcon from '../../assets/img/menu.svg'

import CartIcon from '../CartIcon/CartIcon'
import TypeProduct from "./TypeProduct";

const NavBar = () => {

    const isMobileOrTablet = window.screen.width < 1024;

    // En version mobile y tablet, el valor inicial de openMenu es false. Por lo tanto el menu iniciara cerrado.
    // En version desktop, openMenu es true, y esto me permite mostrar los items del menu en el NavBar.
    const [openMenu, setOpenMenu] = useState(!(isMobileOrTablet))

    // Manejo las aperturas y cierres de los tipos de productos de Hombre, Mujer, y Ver Todo. En todas las pantallas debe aparecer cerrado
    const [listCategoriesMen, setListCategoriesMen] = useState(false)
    const [listCategoriesWomen, setListCategoriesWomen] = useState(false)
    const [listCategoriesAll, setListCategoriesAll] = useState(false)

    // Al hacer click en el menu, en shopender, o en cart, cierro todos los <TypeComponent /> para que luego al abrir el menu no aparezcan ya abiertas las distintas categorias.
    const CloseAllListCategories = () => {
        setListCategoriesMen(false)
        setListCategoriesWomen(false)
        setListCategoriesAll(false)
    }

    // Al hacer click en un tipo de producto, cierro todos lo del NavBar
    const CloseAllListCategoriesAndMenu = () => {
        CloseAllListCategories();
        setOpenMenu(false);
    }

    // Si es mobile o tablet, cierra todo el menu. Si es desktop, solo cierra los tipos de productos.
    const closeChoice = () => {
        return isMobileOrTablet ? CloseAllListCategoriesAndMenu() : CloseAllListCategories()
    }

    return (
        // En los onClick, setOpenMenu() solo se tiene que ejecutar en version mobile y tablet.
        // Para que no me queden abiertos dos o mas <TypeComponent/> a la vez, al hacer click en uno, cierro los otros dos, poniendo el state en false

        <nav className='navbar'>
            <ul>
                
                <li>
                    <img 
                        className='menu-icon-img'
                        onClick={() => {isMobileOrTablet && 
                                setOpenMenu(!openMenu)
                                CloseAllListCategories()}} 
                        src={menuIcon} 
                        alt="Menu"
                    />
                    {   
                        // Si openMenu es true, muestro las cateogiras de productos. (Funcionalidad para mobile y tablet)
                        openMenu &&
                            <ul className='products-gender'>

                                <li 
                                    onClick={() => {
                                        setListCategoriesMen(!listCategoriesMen)
                                        setListCategoriesWomen(false)
                                        setListCategoriesAll(false)}
                                    }
                                    className={`${listCategoriesMen}`}
                                >
                                    HOMBRE
                                </li>
                                {listCategoriesMen && 
                                    <TypeProduct closeAll={closeChoice} sex='men' />}
                                
                                <li 
                                    onClick={() => {
                                        setListCategoriesWomen(!listCategoriesWomen)
                                        setListCategoriesMen(false)
                                        setListCategoriesAll(false)}}
                                        className={`${listCategoriesWomen}`}
                                >
                                    MUJER
                                </li>
                                {listCategoriesWomen && 
                                    <TypeProduct closeAll={closeChoice} sex='women' />}
                                
                                <li 
                                    onClick={() => {
                                        setListCategoriesAll(!listCategoriesAll)
                                        setListCategoriesMen(false)
                                        setListCategoriesWomen(false)}}
                                        className={`${listCategoriesAll}`}
                                >
                                    VER TODO
                                </li>
                                {listCategoriesAll && 
                                    <TypeProduct closeAll={closeChoice} sex='all' />}

                            </ul>
                    }   
                </li>                                         
                
                <li>
                    <NavLink 
                        to="/" 
                        // No puede abrir el menu, pero si cerrarlo.
                        onClick={() => {isMobileOrTablet && 
                                setOpenMenu(openMenu && false)
                                CloseAllListCategories()}}
                    >
                        <h1 className='shophender'>shophender</h1>
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to="/cart"
                        className='cart-icon-img' 
                        // No puede abrir el menu, pero si cerrarlo.
                        onClick={() => {isMobileOrTablet && 
                                setOpenMenu(openMenu && false)
                                CloseAllListCategories()}}
                    >
                        <CartIcon />
                    </NavLink>
                </li>

            </ul>
        </nav>
    );
}

export default NavBar;