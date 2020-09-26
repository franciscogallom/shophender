import React, { useContext, useState, useEffect } from 'react'

import { Link, useParams } from 'react-router-dom'

import { getFirestore } from '../../firebase'

import './itemDetail.scss'

import addToCart from '../../assets/img/cart-add.svg'
import payPng from '../../assets/img/pay2.svg'

import ButtonItemDetail from '../../components/ButtonItemDetail/ButtonItemDetail'
import Loader from '../../components/Loader/Loader'
import ListItem from '../../components/ListItems/ListItems'

import ProductsInCartContext from '../../context/ProductsInCartProvider'


const ItemDetail = (props) => {

    const { id } = useParams()

    const [loader, setLoader] = useState(true)

    const [item, setItem] = useState({})

    useEffect(() => {
        const db = getFirestore()
        const itemCollection = db.collection("items")
        const item = itemCollection.doc(`${id}`)

        item.get().then((doc) => {
            if(!doc.exists) {
                props.history.push('/404')
                return
            }
            setItem({ id: doc.id, ...doc.data() })
        }).catch((error) => {
            console.log('Error to find the item. Error: ', error)
            props.history.push('/404')
        }).finally(() => {
            setLoader(false)
        })
        // eslint-disable-next-line 
    }, [id])

    const contextItems = useContext(ProductsInCartContext)
    const { productsInCart, setProductsInCart } = contextItems

    const setproductsInCartFunction = () => {
        let isInTheCart = false;
        productsInCart.forEach(product => {
            if (product.id === item.id) {
                product.quantity++
                product.pricePerQuantity += product.unitPrice
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
        loader ? <Loader/> :
        <>
        <section className='container-item-detail margin-t'>
            <img src={'/images/' + item.img1} alt={item.nameProduct} />
            <div>
                <h1>{item.nameProduct}</h1>
                <span>${item.unitPrice}</span>
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
                <p>{item.description}</p>
            </div>
        </section>
        <p className='p-item-detail'>COMPLETA TU OUTFIT</p>
        <ListItem filterSex = {item.sex} />
        </>
    )
}

export default ItemDetail