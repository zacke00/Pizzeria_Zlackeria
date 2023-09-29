import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const FavoritesPage:React.FC = () => {
    return(
        <View style={styles.container}>
            <Text>Favorites Page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center",
    }
})

export default FavoritesPage;