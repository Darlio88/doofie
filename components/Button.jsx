import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons';

export default function Button({iconName, text, elevation, backgroundColor, color,clicked}) {
  return (
    <TouchableOpacity onPress={clicked} style={{...styles.button, backgroundColor, elevation}}>
        {iconName && 
        
        <View style={{marginRight:4,paddingRight:8,borderRightWidth:1, borderColor:'white'}}>
<Ionicons name={iconName} size={24} color={color} />
        </View>
        }
      <Text style={{...styles.buttonText, color, }}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-around',
        paddingHorizontal: 16,
        paddingVertical:12,
        borderRadius:8,
        marginVertical:4
    },
    buttonText:{
        textTransform:'uppercase',
        marginLeft:8,
        fontWeight:'bold'
    }
})