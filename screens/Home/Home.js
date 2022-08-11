import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


import Button from '../../components/Button';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
  <View style={styles.upperContainer}>
    <Image 
      source={require('../../assets/background-doofie.jpg')}
      style={styles.background}
    />
  <View style={styles.welcomeMessage}>
     <Text style={{fontSize:24,color:'white',fontWeight:'bold', fontStyle:'italic', textTransform:'uppercase'}}>Welcome to</Text>
      <Text style={{fontSize:40,color:'white',fontWeight:'bold', marginBottom:40}}>Doofie!!</Text>
     </View>
     <Button 
  iconName='basket'
  text='start order'
  elevation={0}
  backgroundColor='red'
  color='white'
     />     
  </View>
  <View style={styles.lowerContainer}>
      <View style={{alignItems:'center',marginVertical:12}}>
            <Text style={{marginVertical:12, fontWeight:'bold',color:'#000814'}}>ORDER FIRST FROM YOUR FAVOURITES</Text>
            <Button 
            iconName='earth'
            text='View Our Doofie Branches'
            backgroundColor='#588157'
            color='white'
            />
            
            <View 
            style={{marginVertical:12,flexDirection:'row', justifyContent:'space-between',width:'75%'}}>
            <Button 
            text='LOGIN'
            backgroundColor='#588157'
            color='white'
            clicked={()=>(navigation.navigate('login'))}
            />
            <Button 
            text='REGISTER'
            backgroundColor='#588157'
            color='white'
            clicked={()=>(navigation.navigate('signup'))}
            />
            </View>
          
      </View>
      <View style={{marginHorizontal:12,}}>
        <Text style={{marginVertical:12, fontWeight:'bold',color:'#000814'}}>My recent orders</Text>
        <Text style={{fontStyle:'italic',color:'#000814'}}>login for an easy, one tap order again for your recent orders</Text>
      </View>
  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  upperContainer:{
flex:1,
width:'100%',
overflow:'hidden',
justifyContent:'flex-end',
alignItems:'center',
paddingBottom:16,
  },
  lowerContainer:{
flex:1,
  },
  background:{
    resizeMode:'contain',
    position:'absolute'
  },
  welcomeMessage:{

  }
});
