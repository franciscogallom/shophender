import React, { useEffect, useState, useRef } from 'react'

import'./listItems.scss';

import ItemList from '../ItemList/ItemList'

function ListItem ({ items }) {

    return (
        Object.keys(items).length !== 0 &&
        <section className = 'container-list-items'>
            {
                items.map(item => {
                    return (
                        <ItemList 
                            product = {item}
                            key = {item.id}
                        />
                    )
                })
            }
        </section>
    )
}

export default function LazyListItems ({ items }) {
    const [show, setShow] = useState(false)

    const elementRef = useRef()

    useEffect(() => {
        const onChange = (entries) => {
            const element = entries[0]
            if (element.isIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        }
        const observer = new IntersectionObserver(onChange, {
            rootMargin: '100px'
        })

        observer.observe(elementRef.current)

        return () => observer.disconnect()

    })

    return <div ref = { elementRef }>
        {show ? <ListItem items = { items } /> : 'CARGANDO'}
    </div>

}