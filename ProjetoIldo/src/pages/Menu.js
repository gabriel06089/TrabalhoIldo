import { FlatList, View, Text, Button ,StyleSheet,Image, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { Card ,Icon} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';




  
export default function Menu({navigation}) {

    
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Produtos</Text>
        <TouchableOpacity 
        style={styles.button}
        activeOpacity={.6}
        onPress={ () => navigation.navigate('Produtos') }
      >
        <Text style={styles.buttonText}>
            Listar Prodrutos.
        </Text>
      </TouchableOpacity>
        
 
            <ScrollView>
        <Card> 
    <Card.Title >Dormindo!</Card.Title> 
    <Card.Divider /> 
    <Card.Image 
      style={{ padding: 200, paddingHorizontal: 30, }} 
      source={require('../assets/Dormindo.jpg')} 
    /> 
    <Text style={{ marginBottom: 10 }}> 
      Venha provar esse sabor que é calmante e relaxante.
    </Text> 
    <Button 
      title="COMPRE AGORA" 
      color={'red'}
      onPress={() => {alert('Comprado!')}} 
    /> 
  </Card>

  <Card> 
    <Card.Title>DORMIU!</Card.Title> 
    <Card.Divider /> 
    <Card.Image 
      style={{ padding: 200 , paddingHorizontal: 20, }} 
      source={require('../assets/dormiu.jpg')} 
    /> 
    <Text style={{ marginBottom: 10 }}> 
      Contem 1 almofada para sono de aço!
    </Text> 
    <Button  
      title="COMPRE AGORA" 
      color={'red'}
      onPress={() => {alert('Comprado!')}} 
    /> 
  </Card>

  <Card> 
    <Card.Title>Ki-Sono!</Card.Title> 
    <Card.Divider />
    <ScrollView> 
    <Card.Image 
    
      style={{ padding: 200, paddingHorizontal: 50, }} 
      source={require('../assets/kisono.jpg')} 
    /> 
     </ScrollView> 
    <Text style={{ marginBottom: 10 }}> 
      Refresco articial de conforto. 
    </Text> 
    <Button  
      title="COMPRE AGORA" 
      color={'red'}
      onPress={() => {alert('Comprado!')}} 
    /> 
  </Card>
  </ScrollView>
         
        
    </View>
     
  );
}
const styles = StyleSheet.create({
        container: { 
            flex: 1,
            
            paddingVertical: 10,
            paddingHorizontal: 10,
            justifyContent: 'center',
            backgroundColor: '#121015',
            alignItems: 'center',
    
  },
  titleText: {
      alignItems: 'center',
      fontWeight: 'bold',
      fontSize :18,
      color: 'black',
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    alignContent: 'center',
    alignItems: 'center',
  },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
        alignContent: 'center',
        alignItems: 'center',
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
  fontWeight: 'bold',
  alignContent: 'center',
  alignItems: 'center',
   }
  });