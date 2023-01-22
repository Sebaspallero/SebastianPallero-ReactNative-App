import { View, Text, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import React from 'react'

import { styles } from './styles'

const CategoryItem = ({item, onSelected}) => {
  return (
      <TouchableOpacity
            onPress={()=>onSelected(item)}
            style={styles.categoryItemContainer}>
          <View style={styles.categoryItemInfo}>
          <View style={styles.categoryIconContainer}>
              <Text style={styles.categoryIcon}>{item.icon}</Text>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.categoryItemTitle}>{item.title}</Text>
            <Entypo name="arrow-with-circle-right" size={24} color="black" />
          </View>
          </View>
      </TouchableOpacity>
  )
}

export default CategoryItem