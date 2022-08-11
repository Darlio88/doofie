import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Order from '../screens/Order/Order'
import CatergoryOrder from '../screens/Order/CatergoryOrder'
const Stack = createStackNavigator()

const OrderScreen = () => {
  return (
   <Stack.Navigator initialRouteName='order'>
    <Stack.Screen name='Menu' component={Order} 
    initialParams={{
          catergory:'main-assets'
         }} />
    <Stack.Screen name='catergoryOrder' component={CatergoryOrder} />
   </Stack.Navigator>
  )
}

export default OrderScreen

const styles = StyleSheet.create({})