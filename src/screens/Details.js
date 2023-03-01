import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyText from '../components/text/MyText'
import Planet_Header from '../components/Planet_Header'
import { colors } from '../theme/colors'
import { useNavigation } from '@react-navigation/native'

const Details = () => {

    const navigation = useNavigation()
    
  return (
    <View style={styles.container} >
        <Planet_Header backBtn={true} />
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.black
      },
})