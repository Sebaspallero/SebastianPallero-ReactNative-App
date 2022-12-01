import { FlatList, View, ScrollView} from 'react-native'
import React from 'react'
import { Header } from '../../components'
import ItemList from '../../components/item-list/index'
import CategoryCard from '../../components/CategoryCard/index'
import {styles} from './styles'

const Main = ({navigation}) => {

    const products = [
        {
          title: 'Pizza Margarita',
          price: 25.70,
          image:'./pizza.jpg',
          id:'001'
        },
        {
          title: 'Hamburguesa Doble',
          price: 15.30,
          image:'./pizza.jpg',
          id:'002'
        },
        {
          title: 'Ensalada Caesar',
          price: 13.50,
          image:'./pizza.jpg',
          id:'003'
        },
        {
          title: 'Empanada De Pollo',
          price: 5.10,
          image:'./pizza.jpg',
          id:'004'
        }
      ]

  return (
    <ScrollView>
      <Header/>
      <View style={styles.mainContainer}>
        <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data= {products}
        keyExtractor= {(item) => item.id}
        renderItem= {({item})=> <ItemList item={item}/>}
        />
        <CategoryCard navigation={navigation}/>
      </View>
    </ScrollView>
  )
}

export default Main