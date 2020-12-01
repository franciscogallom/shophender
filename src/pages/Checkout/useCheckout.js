import { useContext, useState } from 'react'

import ProductsInCartContext from '../../context/ProductsInCartProvider'
import AuthContext from '../../context/AuthProvider'

import 'firebase/firestore'
import { addBuy } from '../../firebase'

export function useCheckout () {
    const { productsInCart, setProductsInCart } = useContext(ProductsInCartContext)
    const { email } = useContext(AuthContext)

    const [orderID, setOrderID] = useState('')
    // Manejo si ya finalice la compra.
    const [buyCompleted, setBuyCompleted] = useState(false)
    // Controlo que el usuario este registrado.
    const [canContinueWithBuy, setCanContinueWithBuy] = useState(email !== '')

    const [loader, setLoader] = useState(false)

    const handleBuy = (data) => {
        addBuy(setLoader, productsInCart, setBuyCompleted, setProductsInCart, data, setOrderID, email)
    }

    return { loader, buyCompleted, orderID, productsInCart, canContinueWithBuy, setCanContinueWithBuy, handleBuy }
}