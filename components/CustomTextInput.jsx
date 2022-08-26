import { StyleSheet, Text,TextInput, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const CustomTextInput = ({placeholder,iconName,secure}) => {
  return (
    <View
    style={{
    marginBottom:12,
     backgroundColor:'white',
     flexDirection:'row',
     width:'100%',
     justifyContent:'flex-start',
     alignItems:'center',
     paddingHorizontal:12,
     borderRadius:12,
borderWidth:1,
borderColor:'#588157'
      }}>
   <Feather name={iconName} size={24} color="#588157" />
     <TextInput secureTextEntry={secure?secure:false} placeholderTextColor='#588157' color='#588157' placeholder={placeholder} style={{  padding:4, margin:4, width:'100%'}}/>
   </View>
  )
}




export default CustomTextInput

const styles = StyleSheet.create({})