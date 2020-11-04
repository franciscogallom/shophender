import {useState, useEffect} from 'react'

import { getItemsForHome } from '../firebase'

export function useItemsForHome(){
    const [itemsMen, setItemsMen] = useState({})
    const [itemsWomen, setItemsWomen] = useState({})
    const [itemsAll, setItemsAll] = useState({})
    const [err, setErr] = useState(false)
    const [loader, setLoader] = useState(false)

    const data = [
        {sex: 'hombres', position: 'bannerRight', link: 'men', items: itemsMen},
        {sex: 'mujeres', position: 'bannerLeft', link: 'women', items: itemsWomen},
        {sex: 'ver.todo', position: 'bannerRight', link: 'all', items: itemsAll},
    ]

    useEffect(() => {
        // Obtengo cuatro productos de hombre, cuatro de mujer, y cuatro aleatorios.
        getItemsForHome('men', setItemsMen, setLoader, setErr)
        getItemsForHome('women', setItemsWomen, setLoader, setErr)
        getItemsForHome('', setItemsAll, setLoader, setErr)
    }, [])

    return { err, loader, data }
}