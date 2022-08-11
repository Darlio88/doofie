import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import BottomTabs from './navigation/BottomTabs';
import Drawer from './navigation/Drawer';
import Login from './screens/Login/Login';
import Signup from './screens/Signup/Signup';
const Stack = createStackNavigator();
const Draw = createDrawerNavigator()

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator
    screenOptions={
      {
        headerShown:false
      }
    }
    
    >
   
      <Stack.Screen name='drawer' component={Drawer}/>
      <Stack.Screen name='login' component={Login}/>
      <Stack.Screen name='signup' component={Signup}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({})