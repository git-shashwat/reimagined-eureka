import React from "react";
import { Image, View } from "react-native";
import GuessMaker from "../../components/guess-maker/guess-maker.component.jsx";
import GuessedNumber from "../../components/guessed-number/guessed-number.component.jsx";

import styles from "./game.styles.js";

const Game = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/ezgif.com-gif-maker.gif")}
        width="200"
        height="200"
      />
      <GuessedNumber />
      <GuessMaker navigation={navigation} />
    </View>
  );
};

export default Game;
