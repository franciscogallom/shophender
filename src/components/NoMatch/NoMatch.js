import React from 'react'

import noMatchGif from '../../assets/img/404.gif'
import sadSvg from '../../assets/img/sad.svg'

import './noMatch.scss'

const NoMatch = () => {
    return (
        <section className='margin-t nomatch-container'>
            <img className='img-original' src={noMatchGif} alt="404"/>
            <img className='img-rotate' src={noMatchGif} alt="404"/>
            <p>Lo sentimos! No hemos encontrado lo que estas buscando. <br/><img src={sadSvg} alt="sad"/></p>
        </section>
    )
}

export default NoMatch;