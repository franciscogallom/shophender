import React, { useContext } from 'react'

import { Link } from 'react-router-dom'

import './itemDetail.scss'

import addToCart from '../../assets/img/cart-add.svg'
import payPng from '../../assets/img/pay2.png'

import ProductsInCartContext from '../../context/ProductsInCartProvider'

import ButtonItemDetail from '../../components/ButtonItemDetail/ButtonItemDetail'

const ItemDetail = (props) => {

    const contextItems = useContext(ProductsInCartContext)
    const { setProductsInCart } = contextItems

    const setproductsInCartFunction = () => {
        setProductsInCart((prevItems) => [...prevItems, {
            nameProduct: 'Buzo Nike HR40', 
            imgProduct: 'imagen', 
            pricePerQuantity: 5670,
            unitPrice: 5670,
            key: 123,
            id: 123,
            quantity: 1
        }])
    }

    return (
        <section className='container-item-detail margin-t'>
            <img src={require('../../assets/img/h-buzo-1.jpg')} alt={props.nameProduct} />
            <div>
                <h1>Buzo Nike HR40</h1>
                <span>$5670</span>
                <ButtonItemDetail 
                    handleClick = {setproductsInCartFunction} 
                    text = 'Anadir al carrito'
                    svg = {addToCart}
                    classN = ''
                />
                <Link to='/checkout'>
                    <ButtonItemDetail 
                        handleClick = {setproductsInCartFunction} 
                        text = 'Comprar ahora'
                        svg = {payPng}
                        classN = 'buy-now'
                    />
                </Link>
                <p>COMODIDAD CLÁSICA. ESTILO COMBINADO. Te presentamos el buzo Nike PO FT con un logotipo Nike en colores contrastantes y un ajuste un poco más grande, el buzo con capucha Nike Sportswear NSW ofrece comodidad clásica y un estilo urbano audaz. Ajuste extragrande
                    El ajuste ligeramente más grande y los hombros caídos te dan un estilo urbano y relajado.
                    Comodidad y suavidad. La tela de felpa francesa es suave y cómoda para el uso diario.
                </p>
            </div>
        </section>
    )
}

export default ItemDetail