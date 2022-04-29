import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import { Card ,Icon} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
//import Card from '../shared/card';


export default function ReviewDetails({route, navigation}){
    
    
    return(
        <View style={styles.container}>
            <ScrollView>
            <Card>
                <Card.Title> Dormindo</Card.Title>
                <Card.Divider/>
                <Card.Image
                style={{ padding: 200, paddingHorizontal: 30, }} 
                source={require('../assets/Dormindo.jpg')} 
                />
                <Text style={{ marginBottom: 10 }}>
                    Parodia: Doritos
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    -----------------------------------------------------------
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    Preço: $50,00
                </Text>
            </Card>
            <Card>
                <Card.Title> DOR MIU</Card.Title>
                <Card.Divider/>
                <Card.Image
                style={{ padding: 200, paddingHorizontal: 30, }} 
                source={require('../assets/dormiu.jpg')}  
                />
                <Text style={{ marginBottom: 10 }}>
                    Parodia: Bombril
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    -----------------------------------------------------------
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    Preço: $20
                </Text>
            </Card>
            <Card>
                <Card.Title> Ki-sono.</Card.Title>
                <Card.Divider/>
                <Card.Image
                style={{ padding: 200, paddingHorizontal: 30, }} 
                source={require('../assets/kisono.jpg')}  
                />
                <Text style={{ marginBottom: 10 }}>
                Parodia: Ki-Suco
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    -----------------------------------------------------------
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    Preço: $50,00
                </Text>
            </Card>
            </ScrollView>
            
            
            
            
            
        </View>
    )
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
        fontWeight: 'bold',
        fontSize :18,
        color: '#333',
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: undefined,
        width:undefined,
        resizedMode:'contain',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }

    });