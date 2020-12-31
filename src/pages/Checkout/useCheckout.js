import { useContext, useState } from 'react'

import ProductsInCartContext from '../../context/ProductsInCartProvider'
import AuthContext from '../../context/AuthProvider'

import 'firebase/firestore'
import { addOrder } from '../../firebase'

import useSEO from '../../hooks/useSEO'

export function useCheckout () {
    const { productsInCart } = useContext(ProductsInCartContext)

    const { email } = useContext(AuthContext)

    const [orderID, setOrderID] = useState('')
    // Manejo si ya finalice la compra.
    const [buyCompleted, setBuyCompleted] = useState(false)
    // Controlo que el usuario este registrado.
    const [canContinueWithBuy, setCanContinueWithBuy] = useState(email !== '')

    const [loader, setLoader] = useState(false)

    const [ showPayment, setShowPayment] = useState(false)

    const handleBuy = (data) => {
        addOrder(setLoader, productsInCart, data, setOrderID, email, setShowPayment)
    }

    useSEO('Checkout', 'checkout')

    return { loader, buyCompleted, setBuyCompleted, orderID, productsInCart, canContinueWithBuy, setCanContinueWithBuy, handleBuy, showPayment }
}