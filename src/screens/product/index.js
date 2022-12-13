import { View, Text } from 'react-native'
import { styles } from './styles'
import { useSelector } from 'react-redux'
import React from 'react'

const Product = ({navigation}) => {

    const product = useSelector((state) => state.products.selected)
    const {title, description, price} = product || {}

  return (
    <View style={styles.productDetailContainer}>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>${price.toFixed(2)}</Text>
    </View>
  )
}

export default Product