import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../Pages/Welcome';
import HomeRoutes from '.';

const {Navigator, Screen} = createStackNavigator();

const WelcomeRoutes: React.FC = () => {
    const noHeader = { headerShown: false };
    return (
        <NavigationContainer independent={true}>
            <Navigator>
                <Screen name='Welcome' component={Welcome} options={noHeader}/>
                <Screen name="HomeRoutes" component={HomeRoutes} options={noHeader} />
            </Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center', 
        justifyContent: 'center',
    }
})


export default WelcomeRoutes;