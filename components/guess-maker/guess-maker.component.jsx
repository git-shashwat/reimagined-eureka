import React, { useEffect, useState } from "react";
import { createStructuredSelector } from "reselect";
import { View, Button } from "react-native";
import { connect } from "react-redux";

import { selectNumber } from "../../redux/homescreen/homescreen.selectors";
import { selectGuessedNumber } from "../../redux/game/game.selectors";
import { setGuessedNumber } from "../../redux/game/game.actions";
import styles from "./guess-maker.styles";
// import './guess-maker.styles';

const GuessMaker = ({
  navigation,
  number,
  guessedNumber,
  setGuessedNumber,
}) => {
  const [low, setLow] = useState(1);
  const [high, setHigh] = useState(100);

  const moveLower = () => {
    const mid = Math.floor((low + high) / 2);
    if (mid - 1 < number) {
      alert("You tryna die motherfucker?!?!");
      return;
    }
    setHigh(mid - 1);
  };

  const moveHigher = () => {
    const mid = Math.floor((low + high) / 2);
    if (mid + 1 > number) {
      alert("You tryna die motherfucker?!?!");
      return;
    }
    setLow(mid + 1);
  };

  useEffect(() => {
    const mid = Math.floor((low + high) / 2);
    setGuessedNumber(mid);
  }, [low, high]);

  useEffect(() => {
    if (guessedNumber === Number(number)) {
      navigation.navigate("Summary");
    }
  }, [guessedNumber]);

  return (
    <View style={styles.container}>
      <Button color="orange" title="LOWER" onPress={moveLower} />
      <Button color="red" title="HIGHER" onPress={moveHigher} />
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  number: selectNumber,
  guessedNumber: selectGuessedNumber,
});

const mapDispatchToProps = (dispatch) => ({
  setGuessedNumber: (guess) => dispatch(setGuessedNumber(guess)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GuessMaker);
