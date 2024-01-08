import {View, Text, TextInput, Pressable} from 'react-native';
import React, {useContext, useState} from 'react';
import {UserContextType, UserListContext} from '../context/UserListContext';

const AddUserScreen = ({navigation} : any) => {


  const { addPersonsList } = useContext<UserContextType>(UserListContext);
    const [personName, setPersonName] = useState<string>('');

  const handleAddUser = () => {
    
    if (personName.trim() !== '') {
      addPersonsList(personName);
      setPersonName('');

      navigation.navigate('UserListScreen');
    }
  };


  return (
    <View style = {{flex : 1, flexDirection : 'column', alignItems : 'center', justifyContent : 'center'}}>

      <View style = {{flex : 1, marginTop : 150}}> 
      <TextInput placeholder="Name" onChangeText={setPersonName} style = {{color : 'black', fontSize : 20, alignItems : 'center', marginBottom : 50}} />
      
      
      <Pressable onPress={handleAddUser}>
        <Text style = {{color:'white', fontSize:24,  borderWidth : 2, borderColor : 'black', alignItems : 'center', textAlign : 'center', backgroundColor : 'grey'}}>ADD</Text>
      </Pressable>

      </View>

      
    </View>
  );
};

export default AddUserScreen;
