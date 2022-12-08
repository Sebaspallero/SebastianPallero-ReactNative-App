import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { styles } from './styles'

const CategoryItem = ({item, onSelected}) => {
  return (
    <View>
        <TouchableOpacity
            onPress={()=>onSelected(item)}
            style={styles.categoryItemContainer}>
            <View style={styles.categoryItemInfo}>
                <Text style={styles.categoryItemTitle}>{item.title}</Text>
                <Text>{item.icon}</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default CategoryItem