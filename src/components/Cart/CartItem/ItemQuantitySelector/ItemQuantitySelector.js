import React, { useContext } from 'react'

import './itemQuantitySelector.scss'

// Importo Context para manejar la cantidad de items en el carrito.
import ItemsQuantityContext from '../../../../context/ItemsQuantityProvider'

const ItemQuantitySelector = (props) => {

    const contextItems = useContext(ItemsQuantityContext)

    const {setItemsQuantity} = contextItems

    const setItemsAddQuantityFunction = () => {
        setItemsQuantity((prevQuantity) => prevQuantity = prevQuantity + 1)
        props.onClickPlus();
    }
    
    const setItemsSubtractQuantityFunction = () => {
        setItemsQuantity((prevQuantity) => prevQuantity = prevQuantity - 1)
        props.onClickMinus();
    }

    return (
        <div className='item-quantity-selector'>
            <span>Cantidad</span>
            <div>
                <button 
                    className='btn-minus' 
                    onClick={setItemsSubtractQuantityFunction} 
                >-
                </button>
                
                <button 
                    className='btn-plus' 
                    onClick={setItemsAddQuantityFunction} 
                >+
                </button>

            </div>
        </div>
    )
}

export default ItemQuantitySelector