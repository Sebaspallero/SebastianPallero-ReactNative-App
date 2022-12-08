import { View, Text,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {styles} from './styles'

const ProductItem = ({item, onSelected}) => {
  return (
    <TouchableOpacity style={styles.popularContainer} onPress={()=> onSelected(item)}>
        <View style={styles.popularCard}>
          <Image style={styles.popularImg} source={require('../../../assets/pizza.jpg')}/>
          <View style={styles.PopularDescriptionContainer}>
            <Text style={styles.PopularText}>{item.title}</Text>
            <Text style={styles.PopularTextDescription}>{item.description}</Text>
            <Text>${item.price}</Text>
          </View>
        </View>
    </TouchableOpacity>
  )
}

export default ProductItem