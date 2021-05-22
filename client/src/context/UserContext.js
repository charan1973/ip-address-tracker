import React, { createContext, useEffect, useReducer, useState } from 'react';

export const UserContext = createContext()

const UserContextProvider = ({children}) => {
    const getUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
    const [user, userDispatch] = useState(getUser)

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user))
    }, [user])

    return ( 
        <UserContext.Provider value={{user, userDispatch}}>
            {children}
        </UserContext.Provider>
     );
}
 
export default UserContextProvider;