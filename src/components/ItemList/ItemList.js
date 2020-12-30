import React, { useState, useEffect, useRef } from 'react'

import './itemList.scss'

import { Link } from 'react-router-dom'

function ItemList ({ product }) {

    return (
        <article className = 'item-list'>
            <Link to = {`/products/${product.sex}/${product.category}/${product.id}`}>
                <div className = 'container-img'>
                    <img src = {'/images/' + product.img1} alt = {product.nameProduct} />
                    <img className = 'img-hover' src = {'/images/' + product.img2} alt = "Product"/>
                </div>
                <p>{product.nameProduct}</p><br/>
                <span>${product.unitPrice}</span>
            </Link>
        </article>
    )
}

export default function LazyItem ({ product }) {
    const [show, setShow] = useState(false)

    const elementRef = useRef()

    useEffect(() => {

        let observer
        
        const onChange = (entries) => {
            const element = entries[0]
            if (element.isIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        }

        Promise.resolve(
            typeof IntersectionObserver != 'undefined' 
            ? IntersectionObserver
            : import('intersection-observer')
        )
        .then(() => {
            observer = new IntersectionObserver(onChange, {
                rootMargin: '100px'
            })
            
            observer.observe(elementRef.current)
            
        })


        return () => observer && observer.disconnect()

    })

    return <div ref = { elementRef }>
        {show ? <ItemList product = { product } /> : 'CARGANDO'}
    </div>

}