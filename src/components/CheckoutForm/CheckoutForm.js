import React, { useContext } from 'react'

import './checkoutForm.scss'

import AuthContext from '../../context/AuthProvider'

const CheckoutForm = () => {

    const { email } = useContext(AuthContext)

    return (
        <>
        <p className='p-checkout-form'>Estas comprando como {email}</p>
        <form className='checkout-form'> 
            <input type="text" placeholder='Nombre.' />
            <input type="text" placeholder='Apellido.'/>
            <input type="number" placeholder='Número de celular.'/>
        </form>
        </>
    )
}

export default CheckoutForm