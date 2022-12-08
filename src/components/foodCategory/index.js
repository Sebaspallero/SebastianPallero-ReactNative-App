import { View, Text, FlatList } from 'react-native'
import { CATEGORIES } from '../../constants/data'
import React from 'react'

import { styles } from './styles'
import CategoryItem from '../categoryItem'

const FoodCategory = ({navigation}) => {

    const onSelected = (item) => {
        navigation.navigate('Products', {categoryId: item.id, title: item.title})
    }

    const renderItem = ({item}) => <CategoryItem item={item} onSelected={onSelected}/>
        
  return (
    <>
        <Text style={styles.categoryTitle}>Categoria</Text>
        <FlatList
            data={CATEGORIES}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={styles.containerList}/>

    </>
  )
}

export default FoodCategory