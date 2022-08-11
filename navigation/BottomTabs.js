import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home'
import OrderScreen from './OrderScreen'
import More from '../screens/More/More'
import Rewards from '../screens/Rewards/Rewards'
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()
const BottomTabs = () => {
  return (
    <Tab.Navigator 
    initialRouteName='home'
    screenOptions={
      {
        headerShown:false,
        tabBarIconStyle:{
          elevation:3,
        },
        tabBarInactiveTintColor:'#588157',
        tabBarActiveTintColor:'#000814',
        tabBarStyle:{
          elevation:3,
          padding:8,
          height:60,
          
        },
       tabBarLabelStyle:{
        textTransform:'uppercase'
       },
       tabBarItemStyle:{
        paddingBottom:8,
       }
       
      }
    }
    >
        <Tab.Screen
         name='home'
         component={Home} 
         options={{
          tabBarIcon: ({color, size})=>(<Ionicons name='home-outline' color={color} size={size} />)
         }}
         />
        <Tab.Screen 
        name='order' 
        component={OrderScreen}
        options={{
          tabBarIcon: ({color, size})=>(<Ionicons name='restaurant-outline' color={color} size={size} />)
         }} 
         
        />
        <Tab.Screen 
        name='rewards' 
        component={Rewards} 
        options={{
          tabBarIcon: ({color, size})=>(<Ionicons name='medal-outline' color={color} size={size} />)
         }}
        />
        <Tab.Screen
         name='more' 
         component={More} 
         options={{
          tabBarIcon: ({color, size})=>(<Ionicons name='ellipsis-horizontal' color={color} size={size} />)
         }}
         />
    </Tab.Navigator>
  )
}

export default BottomTabs