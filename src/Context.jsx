import React, { useState, createContext } from "react"


const Context = createContext()

function ContextProvider({children}) {
    const [userData, setUserData] = useState([]) 
    const [userPrice, setUserPrice] = useState([]) 
   
    function addUserData(userInfo) {
      setUserData(prevInfo => [...prevInfo, userInfo])  
  }

    function removeUserDataItem(name) {
        console.log(name)
        setUserData(prevItems => prevItems.filter((item) => item.name !== name))
        
  }

  function addUserPrice(price) {
    setUserPrice(prevPrice => [...prevPrice, price])  
  }

function removeUserPrice(price) {
    setUserPrice(prevPrice => prevPrice.filter((item) => item !== price))
}

  function clearUserData() {
    setUserData([])
}

  function clearUserPrice() {
    setUserPrice([])
}

      
    return (
        <Context.Provider value={{
            userData,
            addUserData,
            clearUserData,
            userPrice,
            addUserPrice,
            removeUserDataItem,
            clearUserPrice,
            removeUserPrice
          }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}