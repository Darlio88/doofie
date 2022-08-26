import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React, {useEffect} from 'react'



const ImageCard = ({name,navigation, targetScreen, initialCatergory}) => {


  return (
    <TouchableOpacity 
    style={{alignItems:'center', justifyContent:'center',flex:1}}
     onPress={()=>(targetScreen?navigation.navigate(targetScreen,{catergory:initialCatergory?`${initialCatergory}_${name}`:name,}):alert('no targetScreen'))}>
    <View style={{overflow:'hidden',borderRadius:24, width: 160, height: 120,elevation:2}}>
        <Image 
        source={
          require('../assets/chicken-wings.jpg')
        }
       defaultSource={require('../assets/background-doofie.jpg')} 
    style={styles.image}
    />
   </View>
   <Text style={{fontWeight:'bold',marginTop:8, textTransform:'uppercase'}}>{name.split('-').join(' ')}</Text>
  </TouchableOpacity>
  )
}

export default ImageCard

const styles = StyleSheet.create({
  image:{
    width: 160, height: 120 , resizeMode:'contain'
  }
})