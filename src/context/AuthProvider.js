import React, { useState } from 'react'

const Context = React.createContext({})

export function AuthProvider ({children}) {

    const [email, setEmail] = useState('')

    return  <Context.Provider value={{email, setEmail}}>
                {children}
            </Context.Provider>

}

export default Context