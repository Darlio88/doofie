import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'

const ImageCard = ({name,navigation, baseUrl, targetScreen}) => {
  return (
    <TouchableOpacity 
    style={{alignItems:'center', justifyContent:'center',flex:1}}
     onPress={()=>(targetScreen?navigation.navigate(targetScreen,{catergory:name}):alert('no targetScreen'))}>
    <View style={{overflow:'hidden',borderRadius:24, width: 160, height: 120,elevation:2}}>
        <Image source={
          require('../assets/background-doofie.jpg')
        }
    style={{ width: 160, height: 120 , resizeMode:'contain'}}
    />
   </View>
   <Text style={{fontWeight:'bold',marginTop:8, textTransform:'uppercase'}}>{name.split('-').join(' ')}</Text>
  </TouchableOpacity>
  )
}

export default ImageCard

const styles = StyleSheet.create({})