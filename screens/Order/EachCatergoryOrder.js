import { StyleSheet, View, FlatList, Text} from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import {catergories} from '../../assets/data'
import ImageCard from '../../components/ImageCard';
import { foodCosts } from '../../assets/foodCost';
import FoodCard from '../../components/FoodCard';

const EachCatergoryOrder = (props) => {
  const {catergory} =props.route.params
  alert(catergory)
  const [mainCatergory, subCatergory] = catergory.split('_')
  const initialData = foodCosts[mainCatergory]
  return ( 
  <View style={{paddingTop:32}}>
<FlatList
data={initialData.find(data => data.catergory === subCatergory).items}
numColumns={2}
keyExtractor={(item)=>item.name}
renderItem={({item}) => (<FoodCard {...props} 
 name={item.name} price={item.price}/>) }
/>

  </View>
  )
}

export default EachCatergoryOrder

const styles = StyleSheet.create({
  
})