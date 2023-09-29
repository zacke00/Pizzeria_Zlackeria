import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomePage from '../Pages/Home';
import Assets from "../Assets";

const Tab = createBottomTabNavigator();

const HomeRoutes: React.FC = () => {
    
        return (
            <Tab.Navigator initialRouteName="Start">
                <Tab.Screen name="Home" component={HomePage} options={{...screenOptions, tabBarIcon: ({focused}) => <Assets.icons.Search/>}}/>
      
                <Tab.Screen name="Search" component={HomePage} options={{}}/>
                <Tab.Screen name="Login" component={HomePage} options={{}}/>
            </Tab.Navigator>
        );
};



const screenOptions = {
    headerShown: false,
  
    tabBarStyle: {
      backgroundColor: "#000",
      borderColor: "#000",
      
    },
    tabBarActiveTintColor: "#f00",
    tabBarInactiveTintColor: "#f0f",
  } as BottomTabNavigationOptions;


export default HomeRoutes;
