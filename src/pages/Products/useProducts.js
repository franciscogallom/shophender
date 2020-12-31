import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { getProducts } from '../../firebase'

import useSEO from '../../hooks/useSEO'

export function useProducts(){
    const [loader, setLoader] = useState(true)
    // Limite para los productos que quiero mostrar.
    const [limit, setLimit] = useState(12)
    const [items, setItems] = useState({})
    const { sex, category } = useParams()
    const [sizeOfCollection, setSizeOfCollection] = useState(0)
    const [err, setErr] = useState(false)
    
    useEffect(() => {
        getProducts (sex, category, limit, setLoader, setSizeOfCollection, setErr, setItems) 
    }, [sex, category, limit])

    useSEO(`${category} for ${sex}`, `${category} for ${sex}`)

    return { err, loader, limit, setLimit, items, sex, category, sizeOfCollection }
}