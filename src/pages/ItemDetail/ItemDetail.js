import React, { useContext, useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import { getFirestore } from '../../firebase'

import './itemDetail.scss'

import addToCart from '../../assets/img/cart-add.svg'
import payPng from '../../assets/img/pay2.png'

import ButtonItemDetail from '../../components/ButtonItemDetail/ButtonItemDetail'
import Loader from '../../components/Loader/Loader'

import ProductsInCartContext from '../../context/ProductsInCartProvider'

const ItemDetail = (props) => {

    const [loader, setLoader] = useState(true)

    const [item, setItem] = useState({})

    useEffect(() => {
        const db = getFirestore()

        const itemCollection = db.collection("items")
        const item = itemCollection.doc('6zESWLOpcNChYLIroDXX')

        item.get().then((doc) => {
            if(!doc.exists) {
                console.log('No existe el item')
                return
            }
            console.log('Encontramos el item')
            setItem({ id: doc.id, ...doc.data() })
        }).catch((error) => {
            console.log('Error buscando el item', error)
        }).finally(() => {
            setLoader(false)
        })
    }, [])

    const contextItems = useContext(ProductsInCartContext)
    const { setProductsInCart } = contextItems

    const setproductsInCartFunction = () => {
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
        <section className='container-item-detail margin-t'>
            <img src={'../../assets/img/' + item.img1} alt={item.nameProduct} />
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
    )
}

export default ItemDetail