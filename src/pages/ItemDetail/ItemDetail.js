import React from 'react'

import { Link, Redirect } from 'react-router-dom'

import { useItemsForItemDetail } from './useItemsForItemDetail'

import './itemDetail.scss'

import addToCart from '../../assets/img/cart-add.svg'
import payPng from '../../assets/img/pay2.svg'

import ItemDetailButton from '../../components/ItemDetailButton/ItemDetailButton'
import Loader from '../../components/Loader/Loader'
import ListItem from '../../components/ListItems/ListItems'

const ItemDetail = (props) => {

    const {err, loader, item, items, setProductsInCartFunction} = useItemsForItemDetail()

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
                        handleClick = {setProductsInCartFunction} 
                        text = 'Anadir al carrito'
                        svg = {addToCart}
                        classN = ''
                    />
                    <Link to = '/checkout'>
                        <ItemDetailButton 
                            handleClick = {setProductsInCartFunction} 
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