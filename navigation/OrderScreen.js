import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Order from '../screens/Order/Order'
import CatergoryOrder from '../screens/Order/CatergoryOrder'
import EachCatergoryOrder from '../screens/Order/EachCatergoryOrder'
import Cart from '../screens/Order/Cart'
const Stack = createStackNavigator()

const OrderScreen = () => {
  return (
   <Stack.Navigator initialRouteName='order'>
    <Stack.Screen name='Menu' component={Order} 
    initialParams={{
          catergory:'main-assets'
         }} />
    <Stack.Screen name='catergoryOrder' component={CatergoryOrder} />
    <Stack.Screen name='eachCatergoryOrder' component={EachCatergoryOrder} />
    <Stack.Screen name='cart' component={Cart} />
   </Stack.Navigator>
  )
}

export default OrderScreen

const styles = StyleSheet.create({})