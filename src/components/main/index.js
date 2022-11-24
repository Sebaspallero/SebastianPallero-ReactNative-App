import { FlatList, View,Text } from 'react-native'
import React from 'react'
import ItemList from '../item-list'
import {styles} from './styles'

const Main = ({products}) => {

  return (
    <View style={styles.mainContainer}>
      <FlatList
      data= {products}
      keyExtractor= {(item) => item.id}
      renderItem= {({item, index})=> <ItemList item={item}/>}
      
      />
    </View>
  )
}

export default Main