import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { CART } from '../../constants/data'
import CartItem from '../../components/cartItem'
import React from 'react'

const Cart = () => {

    const onDelete = (item) =>{ console.warn(item)}
    const renderItem = ({item}) => <CartItem item={item} onDelete={onDelete}/>

  return (
    <View>
      <FlatList
        data={CART}
        renderItem={renderItem}
        keyExtractor={(item)=> item.id}
        />
        <TouchableOpacity style={styles.cartButton}>
            <Text>Confirmar</Text>
            <Text>Total: $30</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Cart