import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons'
import ShopNavigator from "./shop";
import CartNavigator from "./cart";
import OrderNavigator from "./orders";

const BottomTab = createBottomTabNavigator();

const TabNavigator = () =>{
    return(
        <BottomTab.Navigator
            initialRouteName="ShopTab"
            screenOptions={{headerShown: false}}>
            <BottomTab.Screen
                name="Home"
                component={ShopNavigator}
                options={{
                    tabBarIcon:({focused}) => (
                        <Ionicons 
                        name={focused ? 'home' : 'home-outline'}
                        size={24}
                        color={'#A9A9A9'}/>
                    ),

                tabBarLabelStyle:{
                    fontFamily:'Poppins-Regular',
                    fontSize: 12
                },

                tabBarActiveTintColor: 'black'
                }}/>

            <BottomTab.Screen
                name="Pedidos"
                component={OrderNavigator}
                options={{
                    tabBarIcon:({focused}) => (
                        <Ionicons 
                        name={focused ? 'newspaper' : 'newspaper-outline'}
                        size={24}
                        color={'#A9A9A9'}/>
                    ),

                    tabBarLabelStyle:{
                        fontFamily:'Poppins-Regular',
                        fontSize: 12
                    },
                    
                    tabBarActiveTintColor: 'black',
                   
                    
                }}/>

            <BottomTab.Screen
                name="Carrito"
                component={CartNavigator}
                options={{
                    tabBarIcon:({focused}) => (
                        <Ionicons 
                        name={focused ? 'cart' : 'cart-outline'}
                        size={24}
                        color={'#A9A9A9'}/>
                    ),

                    tabBarLabelStyle:{
                        fontFamily:'Poppins-Regular',
                        fontSize: 12
                    },

                    tabBarActiveTintColor: 'black', 
                }}/>
        </BottomTab.Navigator>
    )
}

export default TabNavigator;