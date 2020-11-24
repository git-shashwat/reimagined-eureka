import React from "react";
import { View, Button } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ColoredRaisedButton } from "react-native-material-kit";
import { selectNumber } from "../../redux/homescreen/homescreen.selectors";
import {
  setIsConfirmed,
  setNumber,
} from "../../redux/homescreen/homescreen.actions";
import styles from "./input-confirmation.styles";

const InputConfirmation = ({ number, setNumber, setIsConfirmed }) => {
  return (
    <View style={styles.container}>
      <Button color="#FF2511" title="Reset" onPress={() => setNumber("1")} />
      <Button
        disabled={!number}
        title="Confirm"
        color="#189AB4"
        onPress={() => {
          if (number < 1 || number > 100) {
            alert("Enter a Number b/w 1 & 100");
            return;
          }
          setIsConfirmed();
        }}
      />
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  number: selectNumber,
});

const mapDispatchToProps = (dispatch) => ({
  setNumber: (number) => dispatch(setNumber(number)),
  setIsConfirmed: () => dispatch(setIsConfirmed(true)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputConfirmation);
