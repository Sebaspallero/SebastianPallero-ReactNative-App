import { FlatList, View} from 'react-native'
import React from 'react'
import ItemList from '../item-list'
import CategoryCard from '../CategoryCard'
import {styles} from './styles'

const Main = ({products, switchScreen}) => {

  return (
    <View style={styles.mainContainer}>
      <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data= {products}
      keyExtractor= {(item) => item.id}
      renderItem= {({item})=> <ItemList item={item}/>}
      />
      <CategoryCard switchScreen={switchScreen}/>
    </View>
  )
}

export default Main