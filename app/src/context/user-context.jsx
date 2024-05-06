import React, { createContext, useState, useContext } from 'react'
const UserContext = createContext(null)

export const UserProvider = props => {
  const [userId, setUserId] = useState(null)
  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {props.children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  return useContext(UserContext)
}
