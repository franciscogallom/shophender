import React, { useState } from 'react'

const Context = React.createContext({})

export function PopUpCartContext ({children}) {

    const [popUpCart, setPopUpCart] = useState(0)

    return  <Context.Provider value={{popUpCart, setPopUpCart}}>
                {children}
            </Context.Provider>

}

export default Context