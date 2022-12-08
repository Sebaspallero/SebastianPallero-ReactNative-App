import { View, Text } from 'react-native'
import { styles } from './styles'
import { PRODUCTS } from '../../constants/data'
import React from 'react'

const Product = ({navigation, route}) => {

    const {productId} = route.params;

    const filteredProduct = PRODUCTS.find((product) => product.id == productId);
    const {title, description, price} = filteredProduct || {}

  return (
    <View style={styles.productDetailContainer}>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>${price.toFixed(2)}</Text>
    </View>
  )
}

export default Product