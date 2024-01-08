import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { UserContextType, UserListContext } from '../context/UserListContext';

const UserListScreen = ({navigation} : any) => {

    
    const {personsList} = useContext(UserListContext) as UserContextType;

  return (
    <View>
       {personsList.map((person,index)=><Text style={{textAlign : 'center', justifyContent : 'center', alignItems : 'center', color : 'black', fontSize : 20, marginTop : 5}} key={index}>{person}</Text>)}
    </View>
  )
}

export default UserListScreen