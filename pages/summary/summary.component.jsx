import React from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectGuessCount,
  selectGuessedNumber,
} from "../../redux/game/game.selectors";
import {
  setNumber,
  setIsConfirmed,
} from "../../redux/homescreen/homescreen.actions";
import { setGuessCount, setGuessedNumber } from "../../redux/game/game.actions";

import styles from "./summary.styles";

const Summary = ({
  navigation,
  guessCount,
  resetGuessedNumber,
  resetNumber,
  resetIsConfirmed,
  resetGuessCount,
}) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 32 }}>Guess Count</Text>
      <Text style={{ fontSize: 92, color: "orange" }}>{guessCount}</Text>
      <View style={{ width: "40%" }}>
        <Button
          color="green"
          title="Play Again"
          onPress={() => {
            resetGuessedNumber();
            resetNumber();
            resetIsConfirmed();
            resetGuessCount();
            navigation.navigate("Home");
          }}
        />
      </View>
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  guessCount: selectGuessCount,
});

const mapDispatchToProps = (dispatch) => ({
  resetNumber: () => dispatch(setNumber("1")),
  resetIsConfirmed: () => dispatch(setIsConfirmed(false)),
  resetGuessedNumber: () => dispatch(setGuessedNumber(-1)),
  resetGuessCount: () => dispatch(setGuessCount(0)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
