import { View, Text, Image } from 'react-native'
import React from 'react'
import {styles} from './styles'

const PopularCategory = () => {
  return (
    <View style={styles.popularContainer} >
        <View style={styles.popularCard}>
          <Image style={styles.popularImg} source={require('../../../assets/pizza.jpg')}/>
          <View style={styles.PopularDescriptionContainer}>
            <Text style={styles.PopularText}>Pizza Margarita</Text>
            <Text style={styles.PopularTextDescription}>Pizza hecha en horno de Leña, con base de tomate, mozzarella y albahaca.</Text>
          </View>
        </View>
    </View>
  )
}

export default PopularCategory