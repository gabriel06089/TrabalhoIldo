import React from 'react';
import {View, Text,StatusBar} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from './src/pages/Home';
import Menu from './src/pages/Menu';

import { createDrawerNavigator } from '@react-navigation/drawer';
import ReviewDetails from './src/pages/reviewDetails';





const Stack = createStackNavigator();
function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen name="Home" component={Home} options = {{
          headertrack: true,
          headerShown: false,
        }}/>
        <Stack.Screen name="Menu" component={Menu} options = {{
          title: 'Menu',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Stack.Screen name="Produtos" component={ReviewDetails}
        options = {{
          title: 'Produtos',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;
