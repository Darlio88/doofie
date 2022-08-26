import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import CustomTextInput from '../../components/CustomTextInput';
import TextLogo from '../../components/TextLogo';
import Button from '../../components/Button'

const Signup = ({navigation}) => {
  return (
    <ScrollView>
       <View style={{flex:1, justifyContent:'space-between',alignItems:'center', padding:4}}>
 <View style={{flex:1, width:'100%',alignItems:'center'}}>
      <TextLogo />
      </View>
      <View style={{width:'90%',flex:4}}>
      <CustomTextInput placeholder='First Name' iconName='user'/>
      <CustomTextInput placeholder='Last Name' iconName='user'/>
      <CustomTextInput placeholder='Email' iconName='mail'/>
       <CustomTextInput secure={true} placeholder='password' iconName='lock'/>
       <CustomTextInput secure={true} placeholder='Comfirm password' iconName='lock'/>
       <Button 
         text='SIGN UP'
         elevation={0}
         backgroundColor='#588157'
         color='black'
        />
      </View>
      <View style={{flexDirection:'row', flex:2, marginVertical:8}}>
        <Text style={{fontSize:16}}>Already have an account?</Text>
       <TouchableOpacity style={{marginLeft:4}} onPress={()=>(navigation.navigate('login'))}>
        <Text style={{color:'blue',fontSize:16, fontWeight:'bold'}}>SIGN IN</Text>
       </TouchableOpacity>
       </View>
    </View>
    </ScrollView>
   
  )
}

export default Signup

const styles = StyleSheet.create({})