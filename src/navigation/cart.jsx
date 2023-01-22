import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart, Maps } from "../screens"; 


const Stack = createNativeStackNavigator();

const CartNavigator = () =>{
    return(
        <Stack.Navigator
            initialRouteName="Main">
                <Stack.Screen
                name="Cart"
                component={Cart}
                options={{
                    headerShown: false,
                }}/>
                <Stack.Screen 
                name="Maps" 
                component={Maps}
                options={{
                    headerShown: false,
                }}
                 />
        </Stack.Navigator>
    )
}

export default CartNavigator;