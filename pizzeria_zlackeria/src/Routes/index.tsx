import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomePage from "../Pages/Home";
import Assets from "../Assets";
import SearchPage from "../Pages/SearchPage";
import DetailPage from "../Pages/DetailPage";
import FavoritesPage from "../Pages/FavoritesPage";


const Tab = createBottomTabNavigator();

const noHeader = { headerShown: false };

const HomeRoutes: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName="Start">
      
      <Tab.Screen 
      name="Start" 
      component={HomePage} 
      options={{...screenOptions, tabBarIcon: ({focused}) => <Assets.icons.Home style={iconStyle(focused)}/> }}/>
      
      <Tab.Screen 
      name="Search" 
      component={SearchPage} 
      options={{...screenOptions, tabBarIcon: ({focused}) => <Assets.icons.Search style={iconStyle(focused)}/> }}/>
      
      <Tab.Screen 
      name="Favorites" 
      component={FavoritesPage} 
      options={{...screenOptions, tabBarIcon: ({focused}) => <Assets.icons.Save style={iconStyle(focused)}/> }}/>
      
      <Tab.Screen 
      name="DetailPage" 
      component={DetailPage} 
      options={{...screenOptions, tabBarIcon: ({focused}) => <Assets.icons.Gallery style={iconStyle(focused)}/> }}/>
    </Tab.Navigator>
  );
};

const iconStyle = ( focused: boolean ) => ({
  opacity: focused ? 1 : 0.5,
  marginBottom: focused ? 6 : 0,
});

const screenOptions = {
  headerShown: false,
  tabBarStyle: {
    backgroundColor: "#000",
    borderColor: "#000",
  },
  tabBarActiveTintColor: "#f00",
  tabBarInactiveTintColor: "#f0f",
};


export default HomeRoutes;