import React, {  createContext } from 'react'

export const userdataContext = createContext()

function UserContext({ children }) {
    const serverUrl = "http://localhost:8080/api/v1"
    const value={
        serverUrl
    }
    return (
       
            <userdataContext.Provider value={value}>
                {children}
            </userdataContext.Provider>
    
    )
}

export default UserContext