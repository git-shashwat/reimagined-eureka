import React, { useEffect, useState } from "react";
import { createStructuredSelector } from "reselect";
import { View, Button } from "react-native";
import { connect } from "react-redux";

import { selectNumber } from "../../redux/homescreen/homescreen.selectors";
import { selectGuessedNumber } from "../../redux/game/game.selectors";
import { setGuessCount, setGuessedNumber } from "../../redux/game/game.actions";
import styles from "./guess-maker.styles";

const GuessMaker = ({
  navigation,
  number,
  guessedNumber,
  setGuessedNumber,
  setGuessCount,
}) => {
  const [low, setLow] = useState(1);
  const [high, setHigh] = useState(100);
  const [count, setCount] = useState(0);

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
    setCount(count + 1);
    setGuessedNumber(mid);
  }, [low, high]);

  useEffect(() => {
    if (guessedNumber === Number(number)) {
      setGuessCount(count);
      navigation.navigate("Summary");
    }
  }, [guessedNumber]);

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button color="#FF9636" title="LOWER" onPress={moveLower} />
      </View>
      <View style={styles.button}>
        <Button color="#F36870" title="HIGHER" onPress={moveHigher} />
      </View>
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  number: selectNumber,
  guessedNumber: selectGuessedNumber,
});

const mapDispatchToProps = (dispatch) => ({
  setGuessedNumber: (guess) => dispatch(setGuessedNumber(guess)),
  setGuessCount: (count) => dispatch(setGuessCount(count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GuessMaker);
