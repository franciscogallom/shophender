import React from 'react'

import './totalToPay.scss'

import payImg from '../../assets/img/pay.png'

import { Link } from 'react-router-dom'

const TotalToPay = () => {
    return (
        <div className='total-to-pay'>
            <p>TOTAL A PAGAR: <span>$9856</span></p>
            <button>
                <Link to='/'>REALIZAR COMPRA <img src={payImg} alt="Pay"/></Link>
            </button>
        </div>
    )
}

export default TotalToPay