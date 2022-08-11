import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextLogo from '../../components/TextLogo';
const More = () => {
  return (
    <View style={{flex:1,alignItems:'center', paddingTop:8}}>
      <View>
        <TextLogo />
      </View>
      <View style={{width:'96%', margin:8,paddingBottom:8, borderBottomWidth:1, borderColor:'#000814'}}>
      <Text style={{fontWeight:'bold', color:'#000814'}}>DEALS</Text>
      </View>
      <View style={{width:'96%', margin:8,paddingBottom:8, borderBottomWidth:1}}>
      <Text style={{fontWeight:'bold',color:'#000814'}}>TERMS & CONDITIONS</Text>
      </View>
      <View style={{width:'96%', margin:8,paddingBottom:8, borderBottomWidth:1}}>
      <Text style={{fontWeight:'bold',color:'#000814'}}>PRIVACY POLICY</Text>
</View>
<View style={{width:'96%', margin:8,paddingBottom:8, borderBottomWidth:1}}>
<Text style={{fontWeight:'bold',color:'#000814'}}>ABOUT US</Text>
</View>
<View style={{width:'96%', margin:8,paddingBottom:8, borderBottomWidth:1}}>
<Text style={{fontWeight:'bold',color:'#000814'}}>CONTACT SUPPORT</Text>
</View> 
    </View>
  )
}

export default More

const styles = StyleSheet.create({})