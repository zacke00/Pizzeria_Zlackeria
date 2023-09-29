import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { SvgProps } from "react-native-svg";
import { Gradients } from "../../Styles/stylesguide";

type CatagoryButtonProps ={
    label: String,
    color: "blue" | "pink" | "cyan" | "yellow"
    Icon: React.FC<SvgProps>
}

const CategoryButton: React.FC<CatagoryButtonProps> = ({label, color, Icon}) => {

    const Gradient = Gradients[color];

    return(
        <TouchableOpacity>
            <Gradient style={styles.container}>
                <Icon style={styles.Icon} />
                <Text style={styles.label}>{label}</Text>
            </Gradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 10,
        width: 80,
        height: 75,
        alignItems: "center",
        justifyContent: "center",
    },
    Icon:{
        marginBottom: 10,
    },
    label: { color: "white" }
})

export default CategoryButton;