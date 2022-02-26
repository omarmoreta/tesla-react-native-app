import { Image, View } from "react-native";
import React from "react";
import styles from "./styles";

const Title = () => {
  return (
    <View style={styles.title}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/logo.png")}
      />
      <Image
        style={styles.menu}
        source={require("../../assets/images/menu.png")}
      />
    </View>
  );
};

export default Title;
