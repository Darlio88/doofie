import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import NumericInput from 'react-native-numeric-input'
import Button from '../../components/Button'

import React, {useState, useEffect} from 'react'

const Cart = ({navigation,route}) => {
    const [value, setValue] = useState(1)
    const {name, price} = route.params
    const [cost, setCost] = useState(price)
    useEffect(() => {
      setCost(price*value)
    }, [value])
    
  return (
    <View style={{flex:1, alignItems:'center'}}>
      <Image source={require('../../assets/hot-fudge-sundae.jpg')} style={{width:'100%', height:240}}/>
      <View style={{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:16,
        paddingHorizontal:16}}>
        <Text style={{fontSize:16, fontWeight:'bold', color:'#000814',textTransform:'uppercase'}}>{name.split('-').join(' ')}</Text>
        <Text style={{color:'blue', fontWeight:'bold'}}>Ug.shs {price}</Text>
      </View>
     <View style={{width:'100%',justifyContent:'center', alignItems:'center', marginTop:24}}>
     <NumericInput 
            value={value} 
            onChange={value => setValue(value)} 
            onLimitReached={(isMax,msg) => console.log(isMax,msg)}
            totalWidth={240} 
            totalHeight={50} 
            iconSize={25}
            step={1}
            valueType='real'
            rounded 
            textColor='#000814' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#588157' 
            leftButtonBackgroundColor='#588157'/>
     </View>
     <View style={{width:'70%', marginTop:24}}>
        <Button elevation={1} color='#000814'  text='ADD TO ORDER' backgroundColor='#588157'/>
     </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})