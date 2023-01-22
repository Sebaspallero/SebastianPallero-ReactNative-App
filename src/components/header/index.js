import { View, Text } from 'react-native'
import React from 'react'
import {styles} from './styles'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Pronto</Text>
      <Text style={styles.subTitle}>Food Delivery</Text>
    </View>
  )
}

export default Header