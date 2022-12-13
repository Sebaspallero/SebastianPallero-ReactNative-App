import { View, ActivityIndicator} from 'react-native';
import { useFonts } from 'expo-font';
import {styles} from './utils/styles';
import { Provider } from 'react-redux';
import store from './store';
import AppNavigator from './navigation/index';



export default function App() {


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
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}


