import React, { useState, useContext} from "react"

import { NavLink } from "react-router-dom"

import "./navbar.scss"

import menuIcon from '../../assets/img/menu.svg'
import shophenderNav from '../../assets/img/shophender-nav.png'
import userNav from '../../assets/img/user.svg'

import CartDropDown from '../CartDropDown/CartDropDown'

import CartIcon from '../CartIcon/CartIcon'
import DropDownMenu from "../DropDownMenu/DropDownMenu"

import ProductsInCartContext from '../../context/ProductsInCartProvider'

const NavBar = () => {

    const { productsInCart } = useContext(ProductsInCartContext)

    const isMobileOrTablet = window.screen.width < 1024

    // En version mobile y tablet, el valor inicial de openMenu es false. Por lo tanto el menu iniciara cerrado.
    // En version desktop, openMenu es true, y esto me permite mostrar los items del menu en el NavBar.
    const [openMenu, setOpenMenu] = useState(!isMobileOrTablet)

    // Manejo el estado para abrir y cerrar el menu.
    const setOpenMenuFunction = () => setOpenMenu((previousMenu) => !previousMenu)

    // Manejo el estado solo para abrir el menu.
    const setOnlyOpenMenuFunction = () => setOpenMenu((previousMenu) => previousMenu && false)

    // Manejo las aperturas y cierres de los tipos de productos de Hombre, Mujer, y Ver Todo. En todas las pantallas debe aparecer cerrado.
    const [listCategoriesMen, setListCategoriesMen] = useState(false)
    const [listCategoriesWomen, setListCategoriesWomen] = useState(false)
    const [listCategoriesAll, setListCategoriesAll] = useState(false)

    // Al igual que con setOpenMenu, esta es la mejor forma de usar el estado anterior para obtener el siguiente.
    const setListCategoriesMenFunction = () => setListCategoriesMen((previousCategory) => !previousCategory) 
    const setListCategoriesWomenFunction = () => setListCategoriesWomen((previousCategory) => !previousCategory) 
    const setListCategoriesAllFunction = () => setListCategoriesAll((previousCategory) => !previousCategory) 

    // Al hacer click en el menu, en shopender, o en cart, cierro todos los <TypeComponent /> para que luego al abrir el menu no aparezcan ya abiertas las distintas categorias.
    const closeAllListCategories = () => {
        setListCategoriesMen(false)
        setListCategoriesWomen(false)
        setListCategoriesAll(false)
    }

    // Al hacer click en un tipo de producto, cierro todos lo del NavBar.
    const closeAllListCategoriesAndMenu = () => {
        closeAllListCategories();
        setOpenMenu(false);
    }

    // Si es mobile o tablet, cierra todo el menu. Si es desktop, solo cierra los tipos de productos.
    const closeChoice = () => {
        return isMobileOrTablet ? closeAllListCategoriesAndMenu() : closeAllListCategories()
    }

    const [showCart, setShowCart] = useState(false);

    return (
        // En los onClick, setOpenMenu() solo se tiene que ejecutar en version mobile y tablet.
        // Para que no me queden abiertos dos o mas <TypeProduct /> a la vez, al hacer click en uno, cierro los otros dos.

        <nav className = 'navbar'>
            <ul>
                
                <li>
                    <img 
                        className = 'menu-icon-img'
                        onClick = {() => {isMobileOrTablet && 
                                setOpenMenuFunction()
                                closeAllListCategories()}} 
                        src = {menuIcon} 
                        alt = "Menu"
                    />
                    {   
                        // Si openMenu es true, muestro las cateogiras de productos. (Funcionalidad para mobile y tablet).
                        openMenu &&
                            <ul className = 'products-gender'>

                                <li 
                                    onMouseEnter = {() => {
                                        if (!isMobileOrTablet){
                                            setListCategoriesMenFunction()
                                            setListCategoriesWomen(false)
                                            setListCategoriesAll(false)}
                                        }
                                    }
                                    onClick = {() => {
                                        if (isMobileOrTablet){
                                            setListCategoriesMenFunction()
                                            setListCategoriesWomen(false)
                                            setListCategoriesAll(false)}
                                        }
                                    }
                                    className = {`${listCategoriesMen}`}
                                >
                                    HOMBRE
                                </li>
                                {listCategoriesMen && 
                                    <DropDownMenu onMouseLeave = {!isMobileOrTablet ? setListCategoriesMenFunction : undefined} closeAll = {closeChoice} sex = 'men' />}
                                
                                <li 
                                    onMouseEnter = {() => {
                                        if (!isMobileOrTablet){
                                        setListCategoriesWomenFunction()
                                        setListCategoriesMen(false)
                                        setListCategoriesAll(false)}
                                        }
                                    }
                                    onClick = {() => {
                                        if (isMobileOrTablet){
                                        setListCategoriesWomenFunction()
                                        setListCategoriesMen(false)
                                        setListCategoriesAll(false)}
                                        }
                                    }
                                    className = {`${listCategoriesWomen}`}
                                >
                                    MUJER
                                </li>
                                {listCategoriesWomen && 
                                    <DropDownMenu onMouseLeave = {!isMobileOrTablet ? setListCategoriesWomenFunction : undefined} closeAll = {closeChoice} sex = 'women' />}
                                
                                <li 
                                    onMouseEnter = {() => {
                                        if (!isMobileOrTablet){
                                            setListCategoriesAllFunction()
                                            setListCategoriesMen(false)
                                            setListCategoriesWomen(false)} 
                                        }
                                    }
                                    onClick = {() => {
                                        if (isMobileOrTablet){
                                            setListCategoriesAllFunction()
                                            setListCategoriesMen(false)
                                            setListCategoriesWomen(false)} 
                                        }
                                    }
                                    className = {`${listCategoriesAll}`}
                                >
                                    VER TODO
                                </li>
                                {listCategoriesAll && 
                                    <DropDownMenu onMouseLeave = {!isMobileOrTablet ? setListCategoriesAllFunction : undefined} closeAll = {closeChoice} sex = 'all' />}

                            </ul>
                    }   
                </li>                                         
                
                <li>
                    <NavLink 
                        to= "/" 
                        // No puede abrir el menu, pero si cerrarlo.
                        onClick = {() => {isMobileOrTablet && 
                                setOnlyOpenMenuFunction()
                                closeAllListCategories()}}
                    >
                        <img className = 'shophender' src = {shophenderNav} alt = "shophender"/>
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to = "/authentication"
                        // No puede abrir el menu, pero si cerrarlo.
                        onClick = {() => {isMobileOrTablet && 
                                setOnlyOpenMenuFunction()
                                closeAllListCategories()}}
                    >
                        <img className = 'user-nav' src = {userNav} alt = "user"/>
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        onMouseEnter = {() => !isMobileOrTablet && productsInCart[0] && setShowCart(true)}
                        onMouseLeave = {() => setShowCart(false)}
                        to = "/cart" 
                        // No puede abrir el menu, pero si cerrarlo.
                        onClick = {() => {isMobileOrTablet && 
                                setOnlyOpenMenuFunction()
                                closeAllListCategories()}}
                    >
                        <CartIcon />
                        {showCart && productsInCart[0] && <CartDropDown />}
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar