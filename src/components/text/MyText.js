import { View, Text, StyleSheet  } from 'react-native'
import React, { Children } from 'react'
import { presets } from './MyText.preset'

const MyText = ({children, preset='default', style}) => {
  

  const textStyles = StyleSheet.compose(presets[preset], style)
  console.log(textStyles)

  return (<Text style={textStyles} >{children}</Text> )
}

export default MyText