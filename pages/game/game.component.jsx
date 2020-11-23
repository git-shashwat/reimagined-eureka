import React from "react";
import { View, Text } from "react-native";
import GuessMaker from "../../components/guess-maker/guess-maker.component.jsx";
import GuessedNumber from "../../components/guessed-number/guessed-number.component.jsx";

import styles from "./game.styles.js";

const Game = ({ navigation }) => {
  return (
    <View>
      <GuessedNumber />
      <GuessMaker navigation={navigation} />
    </View>
  );
};

export default Game;
