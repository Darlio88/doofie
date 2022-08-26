import { StyleSheet, Text,  TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'

import Button from '../../components/Button'
import CustomTextInput from '../../components/CustomTextInput';
import TextLogo from '../../components/TextLogo';
const Login = ({navigation}) => {
  return (
  <ScrollView>
      <View style={{flex:1, justifyContent:'space-around',alignItems:'center'}}>
      <View style={{flex:1,margin:20,justifyContent:'center',alignItems:'center'}}>
       <TextLogo />
      <Text style={{fontSize:12,fontStyle:'italic', color:'#588157'}}>
        Committed to great food, great coffee,
         great servic and an awesome experience that 
         will make you you long for more!
      </Text>
      </View>
      <View style={{width:'90%',flex:3, justifyContent:'space-between'}}>
    <View>
    <CustomTextInput placeholder='Email' iconName='mail'/>
       <CustomTextInput secure={true} placeholder='password' iconName='lock'/>
        <View>
        <Button 
         text='forgot password'
         elevation={0}
         backgroundColor='transparent'
         color='black'
        />
        </View>
        <Button 
         text='LOG IN'
         elevation={0}
         backgroundColor='#588157'
         color='black'
        />
         <Button 
         iconName='logo-google'
         text='sign in with Google'
         elevation={1}
         backgroundColor='#588157'
         color='black'
        />
    </View>
       <View style={{flexDirection:'row', marginVertical:24}}>
        <Text style={{fontSize:16}}>Do not have an account?</Text>
       <TouchableOpacity style={{marginLeft:4}} onPress={()=>(navigation.navigate('signup'))}>
        <Text style={{color:'blue',fontSize:16, fontWeight:'bold'}}>SIGN UP</Text>
       </TouchableOpacity>
       </View>
      </View>
    </View>
  </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({})