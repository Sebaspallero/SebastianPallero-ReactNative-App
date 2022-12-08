import { View, Text, TouchableOpacity } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import React from 'react'


const CartItem = ({item, onDelete}) => {
  return (
    <View>
      <Text>CartItem</Text>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>{item.quantity}</Text>
      <Text>${item.price}</Text>
      <TouchableOpacity onPress={()=>onDelete(item.id)}>
        <Ionicons
            name='trash'
            size={24}
            color='red'/>
      </TouchableOpacity>
    </View>
  )
}

export default CartItem