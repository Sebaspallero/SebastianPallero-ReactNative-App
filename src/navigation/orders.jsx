import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Orders } from "../screens"; 


const Stack = createNativeStackNavigator();

const OrderNavigator = () =>{
    return(
        <Stack.Navigator
            initialRouteName="Main">
                <Stack.Screen
                name="Orders"
                component={Orders}/>
        </Stack.Navigator>
    )
}

export default OrderNavigator;