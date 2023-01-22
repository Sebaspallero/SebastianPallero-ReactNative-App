import { View, FlatList, SafeAreaView,Text } from 'react-native'
import {useCallback} from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'


import OrderItem from '../../components/orderItem'
import { getOrders, deleteOrder } from '../../store/actions'

import { styles } from './styles'

const Orders = ({navigation}) => {

  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.list)

  const onDelete = (id) =>{
    dispatch(deleteOrder(id))
  }

  useFocusEffect(
    useCallback(() => {
      dispatch(getOrders());
    }, [dispatch])
  );

  const renderItem = ({item}) => <OrderItem item={item} onDelete={onDelete}/> 
  
  return (
    <SafeAreaView style={{height: '90%'}}>
      <Text style={styles.ordersTitle}>Mis Pedidos</Text>
      <View style={styles.ordersContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={orders}
          renderItem={renderItem}
          keyExtractor={(item)=>item.id}/>
      </View>
    </SafeAreaView>
  )
}

export default Orders