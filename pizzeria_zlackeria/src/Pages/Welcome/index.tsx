import { View, Text, Button,StyleSheet } from "react-native";
import React from 'react';
import useOwnNavigation from "../../Hooks/useOwnNavigation";


const Welcome: React.FC = () => {
    const { navigate } = useOwnNavigation();

    const handleContinueClick = () => {
        navigate('HomeRoutes')
    }
    return (
        <View style={style.container}>
            <Text style={style.textStyle}>Welcome</Text>
            <Button title="Continue" onPress={handleContinueClick} />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold'
    }
})

export default Welcome;