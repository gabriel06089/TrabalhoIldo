import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons'

import {useNavigation} from '@react-navigation/native'

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
  ScrollView,
  FlatList,
  
} from 'react-native';




export default function Home({navigation}) {
  const [user, setNewUser] = useState('');
  const [senha, setNewSenha] = useState('');
  const tela = () =>{
  navigation.resset({
        index: 0,
        routes: [{name : 'Home'}]
  })
}

  return (
<View style={styles.container}>
    
      <Text style={styles.title}>
        Efetue o Login
        </Text>

        <Text style ={styles.greetings}>
        Boa noite
        </Text>
       

      <TextInput
        style={styles.input}
        placeholder="Usuario"
        placeholderTextColor="#555"
        onChangeText={setNewUser}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#555"
        onChangeText={setNewSenha}
      />
      
      <TouchableOpacity 
        style={styles.button}
        activeOpacity={.6}
        onPress={ () => navigation.navigate('Menu')}
      >
        <Text style={styles.buttonText}>
            Cadastro
        </Text>
      </TouchableOpacity>
  

      <Text style={[styles.title, {marginVertical: 50}]}>
        Clique em cadatro para continuar.
      </Text>

      

      
</View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 70,
    paddingHorizontal: 30,
    justifyContent: 'center',
    backgroundColor: '#121015',
    alignItems: 'center',
    
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    
    alignItems: 'center',
    
    
  },
  input: {
    width:'100%',
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
    
  },
  greetings:{
    width:'20%',

    alignItems: 'center',
    color: '#FFF'

  },
     button:{
    width:'50%',
    backgroundColor: 'red',
    padding: 6,
    borderRadius:7,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText:{
   color: '#fff',
   fontSize: 17,
 fontWeight: 'bold'
  }
  
 });
  

