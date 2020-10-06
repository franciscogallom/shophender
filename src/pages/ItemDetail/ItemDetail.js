import React, { useContext, useState, useEffect } from 'react'

import { Link, useParams, Redirect } from 'react-router-dom'

import { getItemsForItemDetail } from '../../firebase'

import './itemDetail.scss'

import addToCart from '../../assets/img/cart-add.svg'
import payPng from '../../assets/img/pay2.svg'

import ItemDetailButton from '../../components/ItemDetailButton/ItemDetailButton'
import Loader from '../../components/Loader/Loader'
import ListItem from '../../components/ListItems/ListItems'

import ProductsInCartContext from '../../context/ProductsInCartProvider'


const ItemDetail = (props) => {

    const { id } = useParams()

    const [loader, setLoader] = useState(true)
    // El producto que estoy viendo.
    const [item, setItem] = useState({})
    // Cuatro productos mas para mostar deabjo.
    const [items, setItems] = useState({})

    const [err, setErr] = useState(false)

    useEffect(() => {
        getItemsForItemDetail (id, setItem, setItems, setLoader, setErr)
    }, [id])

    const { productsInCart, setProductsInCart } = useContext(ProductsInCartContext)

    const setproductsInCartFunction = () => {
        let isInTheCart = false;
        productsInCart.forEach(product => {
            if (product.id === item.id) {
                product.quantity++
                product.pricePerQuantity += product.unitPrice
                setProductsInCart(prevItems => [...prevItems])
                isInTheCart = true;
            }
        })
        !isInTheCart && 
            setProductsInCart((prevItems) => [...prevItems, {
                nameProduct: item.nameProduct, 
                imgProduct: item.img1,
                imgProduct2: item.img2, 
                pricePerQuantity: item.unitPrice,
                unitPrice: item.unitPrice,
                key: item.id,
                id: item.id,
                quantity: 1
            }])
    }

    return (
        err ? <Redirect to = '/404' /> : 
        loader ? <Loader/> :
        <>
            <section className = 'container-item-detail margin-t'>
                <img src = {'/images/' + item.img1} alt = {item.nameProduct} />
                <div>
                    <h1>{item.nameProduct}</h1>
                    <span>${item.unitPrice}</span>
                    <ItemDetailButton 
                        handleClick = {setproductsInCartFunction} 
                        text = 'Anadir al carrito'
                        svg = {addToCart}
                        classN = ''
                    />
                    <Link to = '/checkout'>
                        <ItemDetailButton 
                            handleClick = {setproductsInCartFunction} 
                            text = 'Comprar ahora'
                            svg = {payPng}
                            classN = 'buy-now'
                        />
                    </Link>
                    <p>{item.description}</p>
                </div>
            </section>
            <p className = 'p-item-detail'>TAMBIEN TE PUEDE INTERESAR</p>
            <ListItem items = {items} />
        </>
    )
}

export default ItemDetail