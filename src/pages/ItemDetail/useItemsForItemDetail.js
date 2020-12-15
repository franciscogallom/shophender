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

    const [ productsInCart, setProductsInCart ] = useLocalStorage('products', [])

    // const [ productsInLocalStorage, setProductsInLocalStorage ] = useLocalStorage('products', productsInCart)

    const { id } = useParams()

    useEffect(() => {
        getItemsForItemDetail (id, setItem, setItems, setLoader, setErr)
    }, [id])

    const setProductsInCartFunction = () => {
        let isInTheCart = false;
        productsInCart.forEach(product => {
            if (product.id === item.id) {
                // Elimino el producto y lo vuelvo a añadir actualizado.
                const newQuantity = product.quantity + 1
                const newpricePerQuantity = product.pricePerQuantity + product.unitPrice
                const result = productsInCart.filter(item => item.id !== id)
                setProductsInCart([...result, {
                    nameProduct: item.nameProduct, 
                    imgProduct: item.img1,
                    imgProduct2: item.img2, 
                    pricePerQuantity: newpricePerQuantity,
                    unitPrice: item.unitPrice,
                    key: item.id,
                    id: item.id,
                    quantity: newQuantity
                }])    
                isInTheCart = true;
            }
        })
        !isInTheCart &&
            setProductsInCart([...productsInCart, {
                nameProduct: item.nameProduct, 
                imgProduct: item.img1,
                imgProduct2: item.img2, 
                pricePerQuantity: item.unitPrice,
                unitPrice: item.unitPrice,
                key: item.id,
                id: item.id,
                quantity: 1
            }])    
        // console.log(productsInCart)
        // setProductsInLocalStorage(productsInCart)
    }

    return { err, loader, item, items, setProductsInCartFunction }
}