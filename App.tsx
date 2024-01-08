import { View, Text } from 'react-native'
import React from 'react'
import { UserProvider } from './src/context/UserListContext'
import Nav from './src/nav/Nav'

const App = () => {
  return (
   <UserProvider> 
    <Nav /> 
   </UserProvider>
  )
}

export default App