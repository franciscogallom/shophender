import React, {useContext} from 'react'

import './itemQuantitySelector.scss'

import ProductsInCartContext from '../../context/ProductsInCartProvider'

import { useLocalStorage } from '../../hooks/useLocalStorage'

const ItemQuantitySelector = ({ index, quantity}) => {
    
        const {productsInCart, setProductsInCart} = useContext(ProductsInCartContext)

        const [ , setProductsInLocalStorage] = useLocalStorage('products', [])
    
        const addQuantity = () => {
            const temporal = [...productsInCart]
            temporal[index].quantity++ 
            temporal[index].pricePerQuantity += temporal[index].unitPrice 
            setProductsInCart(temporal)
            setProductsInLocalStorage(temporal)
        }
    
        const subtractQuantity = () => {
            const temporal = [...productsInCart]
            temporal[index].quantity--
            temporal[index].pricePerQuantity -= temporal[index].unitPrice 
            setProductsInCart(temporal)
            setProductsInLocalStorage(temporal)
        }


    return (
        <div className = 'item-quantity-selector'>
            <span>Cantidad</span>
            <div>
                <button 
                    className = 'btn-minus' 
                    onClick = {quantity > 1 ? subtractQuantity : undefined} 
                >
                    -
                </button>
                <button 
                    className = 'btn-plus' 
                    onClick = {quantity < 25 ? addQuantity : undefined} 
                >
                    +
                </button>
            </div>
        </div>
    )
}

export default ItemQuantitySelector