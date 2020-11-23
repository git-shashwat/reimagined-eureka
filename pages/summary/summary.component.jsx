import React from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectGuessedNumber } from "../../redux/game/game.selectors";
import {
  setNumber,
  setIsConfirmed,
} from "../../redux/homescreen/homescreen.actions";
import { setGuessedNumber } from "../../redux/game/game.actions";

const Summary = ({
  navigation,
  guessedNumber,
  resetGuessedNumber,
  resetNumber,
  resetIsConfirmed,
}) => {
  return (
    <View>
      <Text>Your number was: {guessedNumber}</Text>
      <Button
        color="green"
        title="Play Again"
        onPress={() => {
          resetGuessedNumber();
          resetNumber();
          resetIsConfirmed();
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  guessedNumber: selectGuessedNumber,
});

const mapDispatchToProps = (dispatch) => ({
  resetNumber: () => dispatch(setNumber("1")),
  resetIsConfirmed: () => dispatch(setIsConfirmed(false)),
  resetGuessedNumber: () => dispatch(setGuessedNumber(-1)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
