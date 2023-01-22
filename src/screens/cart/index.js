import React from 'react'
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, Switch } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native'

import { removeFromCart, confirmCart} from '../../store/actions/cart.actions'
import {insertOrder} from '../../db/index'
import { URL_GEOCODING } from "../../constants/maps";
import CartItem from '../../components/cartItem'
import { LocationSelector } from '../../components'

import { styles } from './styles'
import { useState } from 'react'


const Cart = () => {

  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const [address, setAddress] = useState(null)
  const dispatch = useDispatch()

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const navigation = useNavigation();


  const onDelete = (id) =>{
    dispatch(removeFromCart(id))
  }

  const onCreateOrder = async() =>{
        const result = await insertOrder(address)
        dispatch(confirmCart(cart, total, address));
        navigation.navigate('Main');
  }

  const onLocationPicker = async (coords) =>{
    try{

      const response  = await fetch(URL_GEOCODING(coords?.lat, coords?.lng));

      if (!response.ok) throw new Error("No se ha podido conectar al servicio");

      const data = await response.json();

      if (!data.results) throw new Error("No se ha podido encontrar la direccion");

      setAddress(data.results[0].formatted_address);
    }
    catch(error){
      console.log(error)
      throw error
    }

  };
    
  const renderItem = ({item}) => <CartItem item={item} onDelete={onDelete}/>

  return (
    <SafeAreaView>
        <FlatList
          ListHeaderComponent={
          <>
          <View style={styles.cartContainer}>
            <Text style={styles.cartTitle}>Mi Orden</Text>
            <View style={styles.deliveryContainer}>
          <MaterialIcons name="pedal-bike" size={35} color="#3e3e3e" />
          <View>
            <Text style={styles.deliveryText}>Co-delivery</Text>
            <Text style={styles.deliveryTextAccent}>15-30 min</Text>
          </View>
          <Switch
            trackColor={{false: '#767577', true: '#3e3e3e'}}
            thumbColor={isEnabled ? 'white' : 'white'}
            onValueChange={toggleSwitch}
            value={isEnabled}/>
          </View>
          <LocationSelector onLocationPicker={onLocationPicker} address={address}/>
          </View>
          </>}
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item)=> item.id}
          showsVerticalScrollIndicator = {false}
          ListFooterComponent={
          <>
          {!address || cart.length == 0 ? <View style={styles.carritoMsgContainer}><Text style={styles.carritoMsg}>Agrega Productos a tu Carrito!</Text></View> : 
            <TouchableOpacity
              style={styles.cartButton} 
              onPress={onCreateOrder}>
                <Text style={styles.cartBtnTextBold}>Confirmar</Text>
                <Text style={styles.cartBtnText}>Total: ${total.toFixed(2)}</Text>
            </TouchableOpacity>}
          </>
          }
        />
    </SafeAreaView>
  )
}

export default Cart