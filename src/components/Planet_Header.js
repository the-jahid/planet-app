import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyText from './text/MyText'
import { Spacing } from '../theme/spacing'
import { colors } from '../theme/colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'

const Planet_Header = ({backBtn, title='THE PLANETSS'}) => {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      {backBtn && (
            <Pressable style={{marginRight:Spacing[4]}} onPress={() => {navigation.goBack()} }>
                <Icon name='angle-left' size={35}  color='white' />
            </Pressable>)
      }

      <MyText preset='h2' >{title}</MyText>
    </View>
  )
}

export default Planet_Header

const styles = StyleSheet.create({
    container:{
        padding:Spacing[5],
        borderBottomWidth:0.5,
        borderBottomColor:colors.white,
        flexDirection:'row',
        alignItems:'center'
    }
})