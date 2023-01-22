import { View, Text,TouchableOpacity, Image } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons';
import { formatDate } from '../../utils/functions/index';
import React from 'react'
import {styles} from './styles'

const OrderItem = ({item, onDelete}) => {

  const SumQuantity = () =>{
    const quantity = item.items.map(item => item.quantity);
    let total = quantity.reduce((a, b) => a + b, 0);
    return total
  }
  
  return (
    <View style={styles.productContainer}>
      <View style={styles.orderInfo}>
        <View style={styles.imgContainer}>
          {item.items.map(item => <Image  key={item.id} style={styles.orderImg} source={require=(item.image)}/>)}
        </View>
        <View>
          <View style={styles.deliveryStatusContainer}>
          <Text style={styles.entregadoText}>ENTREGADO</Text>
          <Entypo name="dot-single" size={24} color="black" />
          <Text style={styles.dateText}>{formatDate(item.date)}</Text>
      </View>
      {item.items.map(item => <Text  key={item.id} style={styles.title}>{item.title}</Text>)}
        </View>
      </View>
      <View style={styles.deliveryPriceContainer}>
        <Text style={styles.total}>${item.total.toFixed(2)}</Text>
        <Entypo name="dot-single" size={24} color="black" />
        <Text key={item.id} style={styles.quantity}>{SumQuantity()} {SumQuantity() > 1 ? 'Productos' : 'Producto'}</Text>
      </View>
      <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.trashIcon}>
        <Ionicons
            name='trash'
            size={24}
            color='red'/>
      </TouchableOpacity>
    </View>
  )
}

export default OrderItem