import React, { useContext } from 'react'

import './itemQuantitySelector.scss'

import PopUpCartContext from '../../context/PopUpCartProvider'

const ItemQuantitySelector = (props) => {

    const contextPopUp = useContext(PopUpCartContext)
    const {setPopUpCart} = contextPopUp

    const setItemsAddQuantityFunction = () => {
        props.onClickPlus();
        setPopUpCart((prevPopUp) => prevPopUp + 1)
    }

    const setItemsSubtractQuantityFunction = () => {
        props.onClickMinus();
        setPopUpCart((prevPopUp) => prevPopUp - 1)
    }

    return (
        <div className='item-quantity-selector'>
            <span>Cantidad</span>
            <div>
                <button 
                    className='btn-minus' 
                    onClick={props.quantity > 1 ? setItemsSubtractQuantityFunction : undefined} 
                >-
                </button>
                <button 
                    className='btn-plus' 
                    onClick={props.quantity < 25 ? setItemsAddQuantityFunction : undefined} 
                >+
                </button>
            </div>
        </div>
    )
}

export default ItemQuantitySelector