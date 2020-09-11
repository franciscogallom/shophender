import React, { useContext } from 'react'

import './totalToPay.scss'

import payImg from '../../assets/img/pay.png'

import ButtonCallToAction from '../ButtonCallToAction/ButtonCallToAction'

import TotalToPayContext from '../../context/TotalToPayProvider'

const TotalToPay = () => {

    const contextTotalToPay = useContext(TotalToPayContext)
    const { totalToPay } = contextTotalToPay
    
    return (
        <div className='total-to-pay'>
            <p>TOTAL A PAGAR: <span>${totalToPay}</span></p>
            <ButtonCallToAction 
                link = '/checkout'
                text='REALIZAR COMPRA ' 
                imgBtn={payImg} 
                alt="Realizar compra." 
            />
        </div>
    )
}

export default TotalToPay