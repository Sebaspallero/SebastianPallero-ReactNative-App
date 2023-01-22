import { View, Text, TouchableOpacity, Image } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import React from 'react'
import { styles } from './styles'


const CartItem = ({item, onDelete}) => {
  return (
<View style={styles.productContainer}>
  <View style={styles.productCard}>
    <Image style={styles.productImg} source={require=(item.image)}/>
    <View style={styles.productDescriptionContainer}>
      <Text style={styles.productText} numberOfLines={1}>{item.title}</Text>
      <Text style={styles.productTextDescription} numberOfLines={2}>{item.description}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
        <Text style={styles.productX}>X</Text>
        <Text style={styles.productQuantity}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.trashIcon}>
        <Ionicons
            name='trash'
            size={20}
            color='red'/>
        </TouchableOpacity>
      </View>
    </View>
  </View>
</View>
  )
}

export default CartItem