import React, { useState, createContext } from "react"


const Context = createContext()

function ContextProvider({children}) {
    const [userData, setUserData] = useState([]) 
   
    function addUserData(userInfo) {
      setUserData(prevInfo => [...prevInfo, userInfo])  
  }

  function clearUserData() {
    setUserData([])
}

      
    return (
        <Context.Provider value={{
            userData,
            addUserData,
            clearUserData
          }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}