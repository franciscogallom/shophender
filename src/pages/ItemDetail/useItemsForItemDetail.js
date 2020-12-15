import {useState, useEffect, useContext} from 'react'

import { useParams } from 'react-router-dom'

import { getItemsForItemDetail } from '../../firebase'

import { useLocalStorage } from '../../hooks/useLocalStorage'

import ProductsInCartContext from '../../context/ProductsInCartProvider'

export function useItemsForItemDetail(){
    const [loader, setLoader] = useState(true)
    // El producto que estoy viendo.
    const [item, setItem] = useState({})
    // Cuatro productos mas para mostar deabjo.
    const [items, setItems] = useState({})
    const [err, setErr] = useState(false)

    const { productsInCart, setProductsInCart } = useContext(ProductsInCartContext)

    const [ , setProductsInLocalStorage ] = useLocalStorage('products', [])

    const { id } = useParams()

    useEffect(() => {
        getItemsForItemDetail (id, setItem, setItems, setLoader, setErr)
    }, [id])

    const setProductsInCartFunction = () => {
        let isInTheCart = false;
        productsInCart.forEach(product => {
            if (product.id === item.id) {
                product.quantity++
                product.pricePerQuantity += product.unitPrice
                setProductsInCart(prevItems => [...prevItems])
                isInTheCart = true;
            }
        })
        if (!isInTheCart) {
            const result = [...productsInCart, {
                nameProduct: item.nameProduct, 
                imgProduct: item.img1,
                imgProduct2: item.img2, 
                pricePerQuantity: item.unitPrice,
                unitPrice: item.unitPrice,
                key: item.id,
                id: item.id,
                quantity: 1
            }]
            setProductsInCart(result) 
            setProductsInLocalStorage(result)
        } else {
            setProductsInLocalStorage(productsInCart)
        }
    }

    return { err, loader, item, items, setProductsInCartFunction }
}