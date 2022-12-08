import { View, Text,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {styles} from './styles'

const ProductItem = ({item, onSelected}) => {
  return (
    <TouchableOpacity style={styles.productContainer} onPress={()=> onSelected(item)}>
        <View style={styles.productCard}>
          <Image style={styles.productImg} source={require('../../../assets/pizza.jpg')}/>
          <View style={styles.productDescriptionContainer}>
            <Text style={styles.productText}>{item.title}</Text>
            <Text style={styles.productTextDescription}>{item.description}</Text>
            <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
          </View>
        </View>
    </TouchableOpacity>
  )
}

export default ProductItem