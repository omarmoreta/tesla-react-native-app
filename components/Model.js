import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";

export default function Model(props) {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../assets/images/ModelS.jpeg")}
        style={styles.background}
      />
      <View style={styles.title}>
        <Text style={styles.header}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>
    </View>
  );
}
