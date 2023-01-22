import { Text, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { selectCategory } from '../../store/actions'
import React from 'react'
import { styles } from './styles'
import CategoryItem from '../categoryItem'

const FoodCategory = ({navigation}) => {

    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category.categories);

    const onSelected = (item) => {
        dispatch(selectCategory(item.id));
        navigation.navigate('Products', {title: item.title});
    }

    const renderItem = ({item}) => <CategoryItem item={item} onSelected={onSelected}/>
        
  return (
    <>
        <Text style={styles.categoryTitle}>Categorias</Text>
        <FlatList
            data={categories}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={styles.containerList}/>
    </>
  )
}

export default FoodCategory