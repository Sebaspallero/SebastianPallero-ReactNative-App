import { View, Text, Image, TouchableOpacity } from 'react-native'
import {styles} from './styles'
import React from 'react'

const CategoryCard = ({navigation}) => {
  return (
    <TouchableOpacity style={styles.popularContainer} onPress={()=> navigation.navigate('Popular') }>
        <Text style={styles.popularTitle}>Popular</Text>
        <View style={styles.popularCard}>
          <Image style={styles.popularImg} source={require('../../../assets/pizza.jpg')}/>
          <View style={styles.PopularDescriptionContainer}>
            <Text style={styles.PopularText}>Los Más Pedidos</Text>
            <Text style={styles.PopularTextDescription}>Una selección de las comidas más elegidas por nuestros usuarios.</Text>
          </View>
        </View>
    </TouchableOpacity>
  )
}

export default CategoryCard