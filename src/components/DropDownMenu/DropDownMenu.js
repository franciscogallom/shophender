import React from 'react'

import { NavLink } from 'react-router-dom'

import './dropDownMenu.scss'

const DropDownMenu = (props) => {
    return (
        <ul onMouseLeave={props.onMouseLeave} className='container-type-product'>
            <li><NavLink onClick={props.closeAll} to={`/products/${props.sex}/tshirts`}>- REMERAS -</NavLink></li>
            <li><NavLink onClick={props.closeAll} to={`/products/${props.sex}/pants`}>- PANTALONES -</NavLink></li>
            <li><NavLink onClick={props.closeAll} to={`/products/${props.sex}/coats`}>- ABRIGOS -</NavLink></li>
            <li><NavLink onClick={props.closeAll} to={`/products/${props.sex}/shorts`}>- SHORTS -</NavLink></li>
            <li><NavLink onClick={props.closeAll} to={`/products/${props.sex}/shoes`}>- CALZADO -</NavLink></li>
            <li><NavLink onClick={props.closeAll} to={`/products/${props.sex}`}>- TODO -</NavLink></li>
        </ul>
    )
}

export default DropDownMenu