import React from 'react'

import './checkoutForm.scss'

const CheckoutForm = () => {
    return (
        <form className='checkout-form'> 
            <input type="text" placeholder='Nombre.' />
            <input type="text" placeholder='Apellido.'/>
            <input type="number" placeholder='Número de celular.'/>
            <input type="email" placeholder='Email.'/>
            <input type="email" placeholder='Ingrese nuevamente su email.'/>
        </form>
    )
}

export default CheckoutForm