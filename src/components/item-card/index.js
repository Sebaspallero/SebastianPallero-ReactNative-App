import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { styles } from './styles'

const ItemCard = ({item}) => {

const {title, price, image} = item

  return (
    <View style={styles.itemCardContainer}>
      {/* <Image style={styles.itemCardImg} source={require(image)}/> */}
      <Text style={styles.itemCardTitle}>{title}</Text>
      <Text style={styles.itemCardPrice}>{price}</Text>
      <TouchableOpacity style={styles.itemCardBtn}>
        <Text style={styles.itemCardBtnTxt}>Comprar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ItemCard