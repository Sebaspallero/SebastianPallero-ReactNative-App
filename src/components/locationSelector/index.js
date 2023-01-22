import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import MapPreview from '../mapPreview/index'
import { styles } from './styles'
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import * as Location from 'expo-location'


const LocationSelector = ({onLocationPicker, address}) => {

    const [pickedLocation, setPickedLocation] = useState(null);

    const navigation = useNavigation();
    const route = useRoute()

    const mapLocation = route?.params?.mapLocation

    const verifyPermission = async() =>{
        const {status} = await Location.requestForegroundPermissionsAsync();

        if(status !== 'granted'){
            alert.alert(
                'Permisos insuficientes',
                'Necesitas dar permiso a la ubicación',
                [{text: 'Ok'}]
            );
            return false;
        }
        return true
    }

    const onHandleGetLocation = async () => {
        const isLocationPermission = await verifyPermission();
        if (!isLocationPermission) return;
    
        const location = await Location.getCurrentPositionAsync({
          timeout: 5000,
        });
    
        const { latitude, longitude } = location.coords;
    
        setPickedLocation({ lat: latitude, lng: longitude });
    
        onLocationPicker({ lat: latitude, lng: longitude });
      };

      const onHandleMapLocation = async() =>{
        const isLocationPermission = await verifyPermission();
        if (!isLocationPermission) return;
        navigation.navigate('Main')
      }

      useEffect (()=>{
        if(mapLocation){
            setPickedLocation(mapLocation);
            onLocationPicker(mapLocation)
        }
      },[mapLocation])
      
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <EvilIcons name="location" size={40} color="#3e3e3e"/>
          <Text style={styles.locationText} numberOfLines={1}>{!address ? 'Seleccione una ubicación' : address}</Text>
        </View>
        <View style={styles.mapIconContainer}>
          <TouchableOpacity onPress={onHandleGetLocation}>
            <Entypo name="map" size={30} color="#FFD046" />
          </TouchableOpacity>
        </View>
      </View>
      {!pickedLocation ? null : 
      <View style={styles.preview}> 
        <MapPreview location={pickedLocation}/> 
      </View>}
      {/* <View style={styles.buttonsContainer}>
        <Button style={styles.button} title='Selección desde Mapa' onPress={onHandleMapLocation}/>
      </View> */}
    </View>
  )
}

export default LocationSelector