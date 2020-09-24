import React from 'react'

import './itemQuantitySelector.scss'

const ItemQuantitySelector = (props) => {

    return (
        <div className='item-quantity-selector'>
            <span>Cantidad</span>
            <div>
                <button 
                    className='btn-minus' 
                    onClick = {props.quantity > 1 ? props.subtractQuantity : undefined} 
                >-
                </button>
                <button 
                    className='btn-plus' 
                    onClick = {props.quantity < 25 ? props.addQuantity : undefined} 
                >+
                </button>
            </div>
        </div>
    )
}

export default ItemQuantitySelector