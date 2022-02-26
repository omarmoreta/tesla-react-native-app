import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../Button/StyledButton";
import styles from "./styles";

export default function Model() {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelS.jpeg")}
        style={styles.background}
      />
      <View style={styles.title}>
        <Text style={styles.header}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Customer Order was pressed");
          }}
        />
        <StyledButton
          type="secondary"
          content={"Existing Order"}
          onPress={() => {
            console.warn("Existing Order was pressed");
          }}
        />
      </View>
    </View>
  );
}
