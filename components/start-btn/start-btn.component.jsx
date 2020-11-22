import React from "react";
import { View, Button } from "react-native";

const StartBtn = ({ navigation }) => {
  return (
    <View>
      <Button
        color="green"
        title="Play!"
        onPress={() => navigation.navigate("Game")}
      />
    </View>
  );
};

export default StartBtn;
