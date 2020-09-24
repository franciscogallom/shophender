import React, { useState } from 'react'

const Context = React.createContext({})

export function ProductsInCartContext ({children}) {

    const [productsInCart, setProductsInCart] = useState([])

    return  <Context.Provider value={{productsInCart, setProductsInCart}}>
                {children}
            </Context.Provider>

}

export default Context