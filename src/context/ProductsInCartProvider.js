import React, { useState } from 'react'

const Context = React.createContext({})

export function ProductsInCartContext ({children}) {

    const [ProductsInCart, setProductsInCart] = useState([])

    return  <Context.Provider value={{ProductsInCart, setProductsInCart}}>
                {children}
            </Context.Provider>

}

export default Context