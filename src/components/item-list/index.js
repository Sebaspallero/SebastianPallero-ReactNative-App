import { View} from 'react-native'
import React from 'react'
import ItemCard from '../item-card'
import {styles} from './styles'

const ItemList = ({item}) => {
  return (
    <View style={styles.itemList}>
      <ItemCard item={item}/>
    </View>
  )
}

export default ItemList