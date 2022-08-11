import { StyleSheet, Text } from 'react-native'
import React from 'react'

const TextLogo = () => {
  return (
    <Text 
    style={{
      fontSize:40,
      margin:8,
    fontWeight:'bold',
    fontStyle:'italic', 
    textShadowColor:'#588157',
    textShadowRadius:2,
    textDecorationStyle:'dotted'
    }}>
      Doofie
    </Text>
  )
}

export default TextLogo

const styles = StyleSheet.create({})