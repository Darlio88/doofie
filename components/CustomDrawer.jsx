import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'

import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'


const CustomDrawer = (props) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{alignItems:'center',justifyContent:'center', width:'100%',marginBottom:16,marginTop:32}}>
        <View 
        style={{height:120, width:120,borderRadius:60, borderWidth:4,alignItems:'center',justifyContent:'center', borderColor:'#588157'}}>
        <Image source={require('../assets/profile.png')} 
        style={{height:100, width:100,borderRadius:50,resizeMode:'stretch'}}/>
       
        </View>
        <Text style={{fontWeight:'bold',fontSize:20}}>GUEST USER</Text>
      </View>
  <DrawerContentScrollView {...props}>
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
  </SafeAreaView>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({})