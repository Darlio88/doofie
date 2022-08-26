import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'

import Button from "./Button"

const ImageCard = ({name,price,navigation}) => {

  return (
    <View 
    style={{alignItems:'center', justifyContent:'center',flex:1, paddingBottom:10}}>
    <View style={{overflow:'hidden',borderRadius:24, width: 160, height: 120,elevation:2}}>
        <Image 
        source={
          require('../assets/orange.jpg')
        }
       defaultSource={require('../assets/background-doofie.jpg')} 
    style={styles.image}
    />
   </View>
   <View>
   <Text 
   style={{
    fontWeight:'bold',
    marginTop:8,
     textTransform:'uppercase'
    }}
   >
    {name.split('-').join(' ')}
    </Text>
    <Text>Ug.Shs {price}</Text>
    <Button clicked={()=>{navigation.navigate('cart',{name:name, price:price})}} color='#000814'  text='ORDER NOW' backgroundColor='#588157'/>
   </View>
  </View>
  )
}

export default ImageCard

const styles = StyleSheet.create({
  image:{
    width: 160, height: 120 , resizeMode:'contain'
  }
})