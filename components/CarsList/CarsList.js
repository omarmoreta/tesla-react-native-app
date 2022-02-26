import styles from "./styles";
import { View, FlatList, Dimensions } from "react-native";
import React from "react";
import cars from "./cars";
import Model from "../Car/Model";

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <Model car={item} />}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CarsList;
