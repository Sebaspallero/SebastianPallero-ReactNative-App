import { useState } from 'react';
import { View, ActivityIndicator} from 'react-native';
import { Header, Main } from './components/index';
import { useFonts } from 'expo-font';
import {styles} from './utils/styles';

export default function App() {

  const data = [
    {
      title: 'pizza margarita',
      price: 25.70,
      image:'../assets/pizza.jpg',
      id:'001'
    },
    {
      title: 'pizza margarita',
      price: 25.70,
      image:'../assets/pizza.jpg',
      id:'002'
    },
    {
      title: 'pizza margarita',
      price: 25.70,
      image:'../assets/pizza.jpg',
      id:'003'
    },
    {
      title: 'pizza margarita',
      price: 25.70,
      image:'../assets/pizza.jpg',
      id:'004'
    }
  ]

  const [loaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Italic': require('../assets/fonts/Poppins-Italic.ttf'),
  });

   if (!loaded) {
    return(
      <View style={styles.loader}>
        <ActivityIndicator size='large'/>
      </View>
    )
  } 

  return (
    <View style={styles.container}>
      <Header/>
      <Main products={data}/>
    </View>
  );
}

