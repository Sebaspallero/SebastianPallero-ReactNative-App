import { FlatList } from 'react-native'
import React from 'react'
import { PRODUCTS } from '../../constants/data'
import {styles} from './styles'
import ProductItem from '../../components/productItem'

const Products = ({navigation, route}) => {

    const {categoryId, title} = route.params;

    const filteredProducts = PRODUCTS.filter(product => product.categoryId == categoryId);

    const onSelected = () =>{
        null
    }

    const renderItem = ({item}) => <ProductItem item={item} onSelected={onSelected}/>

  return (
    <FlatList
    data={filteredProducts}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
    />
  )
}

export default Products