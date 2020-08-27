import React, { useState } from 'react'

const Context = React.createContext({})

export function ItemsQuantityContext ({children}) {

    const [itemsQuantity, setItemsQuantity] = useState(2) // MODIFICAR. Tiene que arrancar en cero

    return <Context.Provider value={{itemsQuantity, setItemsQuantity}}>
        {children}
    </Context.Provider>

}

export default Context