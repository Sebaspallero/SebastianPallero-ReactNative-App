import { View, Text, Image, TouchableOpacity, SafeAreaView,Button } from 'react-native'
import { styles } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../store/actions/cart.actions'
import React from 'react'

const Product = ({navigation}) => {


    const dispatch = useDispatch();
    const product = useSelector((state) => state.products.selected);

    const onAdd = () =>{
      dispatch(addToCart(product))
    };

    const {title, description, price, image} = product || {};

  return (
    <SafeAreaView>
      <View style={styles.productDetailContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Image style={styles.image} source={require=(image)}/>
        <View style={styles.priceContainer}>
          <View>
            <Text style={styles.priceText}>Precio</Text>
            <Text style={styles.price}>$ {price.toFixed(2)}</Text>
          </View>
          <TouchableOpacity onPress={onAdd} style={styles.cartBtn}>
            <Text style={styles.cartMsg}>Agregar al Carrito</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Product