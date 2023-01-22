import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import ShopNavigator from "./shop";
import CartNavigator from "./cart";
import OrderNavigator from "./orders";
import { useSelector } from "react-redux";

const BottomTab = createBottomTabNavigator();

const TabNavigator = () =>{

    const cart = useSelector((state) => state.cart.items)

    return(
        <BottomTab.Navigator
            initialRouteName="ShopTab"
            screenOptions={{headerShown: false}}>
            <BottomTab.Screen
                name="Home"
                component={ShopNavigator}
                options={{
                    tabBarIcon:({focused}) => (
                        <AntDesign 
                        name={'home'}
                        size={28}
                        color={focused ? '#FFD046' : '#D3D3D3'}/>
                    ),

                    tabBarShowLabel: false
                }}/>

            <BottomTab.Screen
                name="Pedidos"
                component={OrderNavigator}
                options={{
                    tabBarIcon:({focused}) => (
                        <Ionicons 
                        name={'newspaper-outline'}
                        size={28}
                        color={focused ? '#FFD046' : '#D3D3D3'}/>
                    ),

                   tabBarShowLabel: false
                   
                    
                }}/>

            <BottomTab.Screen
                name="Carrito"
                component={CartNavigator}
                options={{
                    tabBarIcon:({focused}) => (
                        <Ionicons 
                        name={'cart-outline'}
                        size={28}
                        color={focused ? '#FFD046' : '#D3D3D3'}/>
                    ),

                    tabBarShowLabel: false,

                    tabBarBadge: cart.length == 0 ? null : cart.length,
                    
                    tabBarBadgeStyle:{
                        fontFamily: 'Poppins-Regular'
                    }
                }}/>
        </BottomTab.Navigator>
    )
}

export default TabNavigator;