import React, { useState } from 'react'

import { useLocalStorage } from '../hooks/useLocalStorage'

const Context = React.createContext({})

export function ProductsInCartContext ({children}) {

    const [ productsInLocalStorage ] = useLocalStorage('products', [])

    const [productsInCart, setProductsInCart] = useState(productsInLocalStorage)

    return  <Context.Provider value={{ productsInCart, setProductsInCart }}>
                {children}
            </Context.Provider>

}

export default Context