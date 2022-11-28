import { useState } from 'react';
import { View, ActivityIndicator} from 'react-native';
import { Header, Main } from './components/index';
import { PopularCategory } from './screens';
import { useFonts } from 'expo-font';
import {styles} from './utils/styles';

export default function App() {

  const data = [
    {
      title: 'Pizza Margarita',
      price: 25.70,
      image:'./pizza.jpg',
      id:'001'
    },
    {
      title: 'Hamburguesa Doble',
      price: 15.30,
      image:'./pizza.jpg',
      id:'002'
    },
    {
      title: 'Ensalada Caesar',
      price: 13.50,
      image:'./pizza.jpg',
      id:'003'
    },
    {
      title: 'Empanada De Pollo',
      price: 5.10,
      image:'./pizza.jpg',
      id:'004'
    }
  ]

  const [loaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Italic': require('../assets/fonts/Poppins-Italic.ttf'),
  });

/*    if (!loaded) {
    return(
      <View style={styles.loader}>
        <ActivityIndicator size='large'/>
      </View>
    )
  }  */

  const [showCategory, setShowCategory] = useState(null)

  const switchScreen = (showPopular) =>{
    setShowCategory(showPopular)
  }

  let content = <Main products={data} switchScreen={switchScreen}/>
  if(showCategory){
    content = <PopularCategory showCategory={showCategory}/>
  }

  return (
    <View style={styles.container}>
      <Header/>
      {content}
    </View>
  );
}

