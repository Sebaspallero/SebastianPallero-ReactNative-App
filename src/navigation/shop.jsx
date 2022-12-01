import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { Main, PopularCategory } from "../screens";

const Stack = createNativeStackNavigator();

const ShopNavigator = () =>{
    return(
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen 
                name="Main" 
                component={Main} 
                options={{
                    headerShown: false,
                }}/>
            <Stack.Screen 
                name="Popular" 
                component={PopularCategory}
                options={{
                    headerShown: false,
                }}/>
        </Stack.Navigator>
    )
};

export default ShopNavigator