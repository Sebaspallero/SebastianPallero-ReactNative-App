import { View, Text, Image, Button } from 'react-native'
import React from 'react'
import {styles} from './styles'

const PopularCategory = ({navigation}) => {
  return (
    <View style={styles.popularContainer} >
        <View style={styles.popularCard}>
          <Image 
            style={styles.popularImg}
            source={{uri:'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=428&q=80'}}/>
          <View style={styles.PopularDescriptionContainer}>
            <Text style={styles.PopularText}>Pizza Margarita</Text>
            <Text style={styles.PopularTextDescription}>Pizza hecha en horno de Leña, con base de tomate, mozzarella y albahaca.</Text>
          </View>
        </View>
        <Button
            color='black'
            title='Volver Atrás'
            onPress={()=> navigation.navigate('Main') }
        />
    </View>
  )
}

export default PopularCategory