import React, {useState, useEffect} from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import MapView, {Marker} from "react-native-maps";
import { useLayoutEffect } from "react";
import { styles } from "./styles";

const Maps = ({ navigation }) => {

  const [selectedLocation, setSelectedLocation] = useState();

  const initialRegion = {
    latitude: -34.6,
    longitude: -58.45,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  }
      
  const onHandleSaveLocation = () => {
    if (selectedLocation) navigation.navigate("Cart", { mapLocation: selectedLocation });
  };

  const onHandlePickLocation = (event) => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={onHandleSaveLocation}>
          <Ionicons name="md-save-sharp" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, onHandleSaveLocation]);

  return (
    <MapView initialRegion={initialRegion} style={styles.container} onPress={onHandlePickLocation}>
      {
        selectedLocation && (
          <Marker
            title="Dirección"
            coordinate={{
              latitude: selectedLocation.lat,
              longitude: selectedLocation.lng
            }}/>
        )
      }
    </MapView>
  );
};

export default Maps;
