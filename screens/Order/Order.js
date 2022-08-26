import { StyleSheet, View, FlatList} from 'react-native'
import React,{useEffect,useState} from 'react'
import 'react-native-gesture-handler';
//import 'react-native-url-polyfill/auto';
import {foodCatergory,catergories} from '../../assets/data'
import ImageCard from '../../components/ImageCard';

const Order = (props) => {

  return ( 
  <View style={{paddingTop:32}}>
<FlatList
data={foodCatergory}
numColumns={2}
keyExtractor={(item)=>item.name}
renderItem={({item}) => (<ImageCard {...props} 
targetScreen='catergoryOrder'
 name={item.name}/>)} 
/>
  </View>
  )
}

export default Order

const styles = StyleSheet.create({
  
})