import {View, Text, Pressable} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = ({navigation} : any) => {

 
  return (
    <View style = {{flex : 1, flexDirection : 'row'}}>

      <View style = {{flex : 1,  alignItems : 'center', justifyContent : 'space-between',}}>
        <Text style = {{color : 'black', fontSize : 24, margin : 20, alignItems : 'center', padding : 10, marginTop : 50}}>HOME PAGE</Text>

      <View style = {{flex : 1, flexDirection : 'row', margin : 100}}> 
        <Pressable onPress={() => navigation.navigate("AddUserScreen")}>
          <Text style = {{color : 'black', fontSize : 24, margin : 20, borderWidth : 1, borderColor : 'black', alignItems : 'center', padding : 10, marginTop : 50}}> ADD USER </Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("UserListScreen")}>
          <Text style = {{color : 'black', fontSize : 24, margin : 20, borderWidth : 1, borderColor : 'black', alignItems : 'center', padding : 10, marginTop : 50}}> USER LİST </Text>
        </Pressable>
        </View>

      </View>

    </View>
  );
};

export default HomeScreen;
