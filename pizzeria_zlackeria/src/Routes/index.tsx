import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomePage from '../Pages/Home';

const Tab = createBottomTabNavigator();

const HomeRoutes: React.FC = () => {
    
        return (
            <Tab.Navigator initialRouteName="Start">
                <Tab.Screen name="Home" component={HomePage} options={{}}/>
                <Tab.Screen name="Search" component={HomePage} options={{}}/>
                <Tab.Screen name="Login" component={HomePage} options={{}}/>
            </Tab.Navigator>
        );
};


export default HomeRoutes;
