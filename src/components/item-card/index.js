import { View, Text,Image } from 'react-native'
import React from 'react'
import { styles } from './styles'

const ItemCard = ({item}) => {

  return (
    <View style={styles.itemCardContainer}>
      <View style={styles.imgBkg}>
        <Image style={styles.itemCardImg} source={require=(item.image)}/>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.itemCardTitle}>{item.title}</Text>
        <Text style={styles.itemCardPrice}>${item.price.toFixed(2)}</Text>
      </View>
      <Text style={styles.itemDescription} numberOfLines={2}>{item.description}</Text>
    </View>
  )
}

export default ItemCard