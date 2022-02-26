import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../Button/StyledButton";
import styles from "./styles";

export default function Model(props) {
  const { name, price, image, tag, tagLink } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.background} />
      <View style={styles.title}>
        <Text style={styles.header}>{name}</Text>
        <Text style={styles.subtitle}>
          {tag} <Text style={styles.tagLink}>{tagLink}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
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
