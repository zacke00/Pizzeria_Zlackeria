import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CategoryButton from "../../Components/CategoryButton";
import Assets from "../../Assets";
import { Colors } from "../../Styles/stylesguide";

const HomePage:React.FC = () => {
    return (
        <View style={styles.container}> 
        <View style={styles.categoryList}>
            <CategoryButton
            title="Planets"
            Color="blue"
            Icon={Assets.icons.Planets}
          />
          <CategoryButton
            title="Planets"
            Color="blue"
            Icon={Assets.icons.Planets}
          />
          <CategoryButton
            title="Planets"
            Color="blue"
            Icon={Assets.icons.Planets}
          />
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.brandBackground,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
    categoryList: {
        flexDirection: "row",
        gap: 16,
      },
})

export default HomePage;