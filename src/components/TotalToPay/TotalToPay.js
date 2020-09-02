import React, { useContext } from 'react'

import './totalToPay.scss'

import payImg from '../../assets/img/pay.png'

import { Link } from 'react-router-dom'

import TotalToPayContext from '../../context/TotalToPayProvider'

const TotalToPay = () => {

    const contextTotalToPay = useContext(TotalToPayContext)
    const { totalToPay } = contextTotalToPay
    
    return (
        <div className='total-to-pay'>
            <p>TOTAL A PAGAR: <span>${totalToPay}</span></p>
            <button>
                <Link to='/'>REALIZAR COMPRA <img src={payImg} alt="Pay"/></Link>
            </button>
        </div>
    )
}

export default TotalToPay