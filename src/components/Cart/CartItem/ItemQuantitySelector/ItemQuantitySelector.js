import React from 'react'

import './itemQuantitySelector.scss'

const ItemQuantitySelector = (props) => {
    return (
        <div className='item-quantity-selector'>
            <span>Cantidad</span>
            <div>
                <button className='btn-minus' onClick={props.onClickMinus} >-</button>
                <button className='btn-plus' onClick={props.onClickPlus} >+</button>
            </div>
        </div>
    )
}

export default ItemQuantitySelector