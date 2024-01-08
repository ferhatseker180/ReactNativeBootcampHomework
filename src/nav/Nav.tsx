import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AddUserScreen from '../screen/AddUserScreen';
import UserListScreen from '../screen/UserListScreen';
import HomeScreen from '../screen/HomeScreen';


const Nav = () => {
    
    const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer>
    <Stack.Navigator>

        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AddUserScreen" component={AddUserScreen} />
        <Stack.Screen name="UserListScreen" component={UserListScreen} />
        

    </Stack.Navigator>
   </NavigationContainer>
  )
};

export default Nav;