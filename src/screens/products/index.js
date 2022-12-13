import { FlatList, View, Text } from 'react-native'
import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterProducts, selectProduct } from '../../store/actions'
import {styles} from './styles'
import ProductItem from '../../components/productItem'

const Products = ({navigation}) => {

    const category = useSelector((state) => state.category.selected);
    const filteredProducts = useSelector((state) => state.products.filteredProducts);
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(filterProducts(category.id))
    }, []);

    const onSelected = (item) =>{
        dispatch(selectProduct(item.id))
        navigation.navigate('Product', {title: item.title})
    };

    const renderItem = ({item}) => <ProductItem item={item} onSelected={onSelected}/>

  return (
    <View style={styles.productsContainer}>
        <Text style={styles.categoryTitle}>{category.title}</Text>
        <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.productListContainer}
        />
    </View>
  )
}

export default Products