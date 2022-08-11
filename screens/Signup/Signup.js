import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import CustomTextInput from '../../components/CustomTextInput';
import TextLogo from '../../components/TextLogo';
import Button from '../../components/Button'

const Signup = ({navigation}) => {
  return (
    <View style={{flex:1, justifyContent:'space-around',alignItems:'center', padding:8}}>
      <View style={{flex:1, marginTop:24}}>
      <TextLogo />
      </View>
      <View style={{width:'90%',flex:3}}>
      <CustomTextInput placeholder='First Name' iconName='user'/>
      <CustomTextInput placeholder='Last Name' iconName='user'/>
      <CustomTextInput placeholder='Email' iconName='user'/>
       <CustomTextInput placeholder='password' iconName='lock'/>
       <CustomTextInput placeholder='Comfirm password' iconName='lock'/>
       <Button 
         text='SIGN UP'
         elevation={0}
         backgroundColor='#588157'
         color='black'
        />
      </View>
      <View style={{flexDirection:'row', marginVertical:24}}>
        <Text style={{fontSize:16}}>Already have an account?</Text>
       <TouchableOpacity style={{marginLeft:4}} onPress={()=>(navigation.navigate('login'))}>
        <Text style={{color:'blue',fontSize:16, fontWeight:'bold'}}>SIGN IN</Text>
       </TouchableOpacity>
       </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})