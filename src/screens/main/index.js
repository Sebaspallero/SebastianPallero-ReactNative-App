import { FlatList, View, ScrollView, SafeAreaView,Text,Image} from 'react-native'
import React, {useState, useEffect} from 'react'
import {Header}  from '../../components'
import ItemList from '../../components/item-list/index'
import { getOrder } from '../../db'
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import FoodCategory from '../../components/foodCategory/index'
import { PRODUCTS } from '../../constants/data'
import {styles} from './styles'


const Main = ({navigation}) => {

      const popularProducts = PRODUCTS.filter(product => product.popular == true)

      const [userLocation, setUserLocation] = useState(null)
     

      useEffect(()=>{
        navigation.addListener('focus', () => {
          const loadDb = async() => {
            try {
              const result = await getOrder();
              const address = (result?.rows?._array.map(address => address.address));
              setUserLocation(address)
            } 
            catch (error) {
              console.log(error);
              throw error;
            }
          };
          loadDb();
        });
      },[]);


  return (
      <SafeAreaView>
        <ScrollView  showsVerticalScrollIndicator={false}>
          <View style={styles.addressContainer}>
            <EvilIcons name="location" size={40} color="#FFD046"/>
            <Text numberOfLines={1} style={styles.addressText}>{userLocation == 0 ? 'No hay ubicacion' : userLocation}</Text>
          </View>
          <Header/>
          <View style={styles.mainContainer}>
            <View style={styles.categoryContainer}>
              <Text style={styles.categoryTitle}>Recomendado</Text>
              <AntDesign name="hearto" size={24} color="#FFD046" />
            </View>
            <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data= {popularProducts}
            keyExtractor= {(item) => item.id}
            renderItem= {({item})=> <ItemList item={item} navigation={navigation}/>}
            />
            <FoodCategory navigation={navigation}/>
          </View>
        </ScrollView>
      </SafeAreaView>
  )
}

export default Main