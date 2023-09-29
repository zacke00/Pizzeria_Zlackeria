import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const SearchPage:React.FC = () => {
    return(
        <View style={styles.container}>
            <Text>Search Page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center",

    }
})

export default SearchPage;