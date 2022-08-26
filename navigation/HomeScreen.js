import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login/Login';
import Signup from '../screens/Signup/Signup';
import Home from '../screens/Home/Home';

const Stack = createStackNavigator()

const HomeScreen = () => {
  return (
    <Stack.Navigator initialRouteName='home' >
        <Stack.Screen name='welcome' component={Home}/>
      <Stack.Screen name='login' component={Login}/>
      <Stack.Screen name='signup' component={Signup}/>
    </Stack.Navigator>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})