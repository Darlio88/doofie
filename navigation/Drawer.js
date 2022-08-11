import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home/Home'
import Account from '../screens/Account/Account'
import Notifications from '../screens/Notifications/Notifications'
import History from '../screens/History/History'
import Featured from '../screens/Featured/Featured'
import Favourites from '../screens/Favourites/Favourites.js'
import Settings from '../screens/Settings/Settings'

import BottomTabs from './BottomTabs';
import CustomDrawer from '../components/CustomDrawer';

import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const Draw = createDrawerNavigator();
const Drawer = () => {
    
  return (
    <Draw.Navigator
     initialRouteName='home' 
     drawerContent={(props)=> (<CustomDrawer {...props}/>)} 
     screenOptions={{
    drawerLabelStyle:{
      marginLeft:-15,
      textTransform:'uppercase',
    },
    drawerItemStyle:{
      borderBottomWidth:1,
      paddingBottom:4,
      paddingLeft:8,
      borderColor:'gray'
    }
    }} >
        <Draw.Screen 
        name='Home' 
        component={BottomTabs} 
        options={{
          drawerIcon:({color, size})=>(<Ionicons name="home-outline" size={24} color={color} />)
        }}
        />
        <Draw.Screen 
        name='my account' 
        component={Account} 
        options={{
          drawerIcon:({color, size})=>(<EvilIcons name="user" size={30} color={color}/>)
        }}
        />
        <Draw.Screen 
        name='notifications' 
        component={Notifications} 
        options={{
          drawerIcon:({color, size})=>(<Ionicons name="notifications-outline" size={28} color={color} />)
        }}
        />
        <Draw.Screen
         name='order history' 
         component={History} 
         options={{
          drawerIcon:({color, size})=>(<MaterialIcons name="history" size={24} color={color} />)
        }}
         />
        <Draw.Screen 
        name='featured products' 
        component={Featured} 
        options={{
          drawerIcon:({color, size})=>(<Ionicons name="basket-outline" size={24} color={color} />)
        }}
        />
        <Draw.Screen
         name='favourites' 
         component={Favourites} 
         options={{
          drawerIcon:({color, size})=>(<Ionicons name="heart-outline" size={24} color={color} />)
        }}
         />
        <Draw.Screen
         name='settings' 
         component={Settings} 
         options={{
          drawerIcon:({color, size})=>(<EvilIcons name="gear" size={24} color={color} />)
        }}
         />
    </Draw.Navigator>
  )
}

export default Drawer

const styles = StyleSheet.create({})