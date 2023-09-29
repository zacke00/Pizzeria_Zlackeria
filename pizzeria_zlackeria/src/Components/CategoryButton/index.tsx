import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { SvgProps } from "react-native-svg";

type CatagoryButtonProps ={
    title: String,
    Color: "blue" | "pink" | "cyan" | "yellow"
    Icon: React.FC<SvgProps>
}

const CategoryButton: React.FC<CatagoryButtonProps> = ({title, Color, Icon}) => {
    return(
        <TouchableOpacity>
            <View>
                <Icon style={styles.Icon} />
                <Text style={styles.label}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 10,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    Icon:{
        marginBottom: 10,
    },
    label: { color: "white" }
})

export default CategoryButton;