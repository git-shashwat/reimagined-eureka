import React from "react";
import { View, Button } from "react-native";
import styles from "./start-btn.styles";

const StartBtn = ({ navigation }) => {
  return (
    <View style={styles.button}>
      <Button
        color="#18A558"
        title="Play!"
        onPress={() => navigation.navigate("Game")}
      />
    </View>
  );
};

export default StartBtn;
