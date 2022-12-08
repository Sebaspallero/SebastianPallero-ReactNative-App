import { FlatList, View, Text } from 'react-native'
import React from 'react'
import { PRODUCTS } from '../../constants/data'
import {styles} from './styles'
import ProductItem from '../../components/productItem'

const Products = ({navigation, route}) => {

    const {categoryId, title} = route.params;

    const filteredProducts = PRODUCTS.filter(product => product.categoryId == categoryId);

    const onSelected = (item) =>{
        navigation.navigate('Product', {title: item.title, productId: item.id})
    }

    const renderItem = ({item}) => <ProductItem item={item} onSelected={onSelected}/>

  return (
    <View style={styles.productsContainer}>
        <Text style={styles.categoryTitle}>{title}</Text>
        <FlatList
        style={styles.productListContainer}
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        />
    </View>
  )
}

export default Products