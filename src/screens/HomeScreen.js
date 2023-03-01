import { StyleSheet, Text, View, SafeAreaView, FlatList, Pressable } from 'react-native'
import React from 'react'
import MyText from '../components/text/MyText'
import Planet_Header from '../components/Planet_Header'
import { colors } from '../theme/colors'
import { PLANET_LIST } from '../data/planet_list'
import { Spacing } from '../theme/spacing'
import Icon from 'react-native-vector-icons/FontAwesome';



const HomeScreen = ({navigation}) => {
  return (
    <View  style={styles.container} >
      <Planet_Header />
      <FlatList 
       contentContainerStyle={styles.list}
        data={PLANET_LIST}tjy  
        keyExtractor={(item, index) => index}
        renderItem={({item}) => (
           <Pressable
           onPress={() => (navigation.navigate('Details', {planet: item}))}
           style={styles.item}>
               <View style={{flexDirection:'row', alignItems:'center'}}>
                  <View style={[styles.circle, {backgroundColor:item.color}]} />
                  <MyText preset='h3' style={styles.itemName}>{item.name}</MyText>
               </View>
               <Icon name='angle-right' size={30} color='white' />
           </Pressable>
        
        )}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
    </View>
  )
}

export default HomeScreen






const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.black
  },

  item:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:Spacing[5]
  },

  itemName:{
    textTransform:'uppercase',
    marginLeft:Spacing[4]

  },

  list:{
    padding:Spacing[5],
  },
  circle:{
    width:30,
    height:30,
    borderRadius:20

  },
  seperator:{
   borderBottomColor:colors.white,
   borderBottomWidth:0.5
  }
})