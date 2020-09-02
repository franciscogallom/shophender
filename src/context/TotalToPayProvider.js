import React, { useState } from 'react'

const Context = React.createContext({})

export function TotalToPayContext ({children}) {

    const [totalToPay, setTotalToPay] = useState(0)

    return  <Context.Provider value={{totalToPay, setTotalToPay}}>
                {children}
            </Context.Provider>

}

export default Context