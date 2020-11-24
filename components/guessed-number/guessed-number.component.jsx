import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectGuessedNumber } from "../../redux/game/game.selectors";

import styles from "./guessed-number.styles.js";

const GuessedNumber = ({ guessedNumber }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 92 }}>{guessedNumber}</Text>
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  guessedNumber: selectGuessedNumber,
});

export default connect(mapStateToProps)(GuessedNumber);
