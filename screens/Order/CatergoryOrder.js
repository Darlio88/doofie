import { StyleSheet, View, FlatList} from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import {catergories} from '../../assets/data'
import ImageCard from '../../components/ImageCard';

const CatergoryOrder = (props) => {
  const {catergory} =props.route.params
  return ( 
  <View style={{paddingTop:32}}>
<FlatList
data={catergories[catergory]}
numColumns={2}
keyExtractor={(item)=>item.name}
renderItem={({item}) => (<ImageCard {...props} 
baseUrl={`https://ik.imagekit.io/x761p7oyp/doofie/${catergory}`}
 name={item.name}/>)} 
/>
  </View>
  )
}

export default CatergoryOrder

const styles = StyleSheet.create({
  
})