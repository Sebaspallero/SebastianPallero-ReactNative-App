import { View, Text, Image, Button } from 'react-native'
import {styles} from './styles'
import React from 'react'

const CategoryCard = ({navigation}) => {
  return (
    <View style={styles.popularContainer}>
        <Text style={styles.popularTitle}>Popular</Text>
        <View style={styles.popularCard}>
          <Image style={styles.popularImg} source={require('../../../assets/pizza.jpg')}/>
          <View style={styles.PopularDescriptionContainer}>
            <Text style={styles.PopularText}>Los Más Pedidos</Text>
            <Text style={styles.PopularTextDescription}>Una selección de las comidas más elegidas por nuestros usuarios.</Text>
            <View style={styles.itemCardBtn}>
                <Button
                color='black'
                title='Ver Más'
                onPress={()=> navigation.navigate('PopularCategory') }/>
            </View>
          </View>
        </View>
    </View>
  )
}

export default CategoryCard