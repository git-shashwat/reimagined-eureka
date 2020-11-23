import React from "react";
import { View, Button } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectNumber } from "../../redux/homescreen/homescreen.selectors";
import {
  setIsConfirmed,
  setNumber,
} from "../../redux/homescreen/homescreen.actions";

const InputConfirmation = ({ number, setNumber, setIsConfirmed }) => {
  return (
    <View>
      <Button color="red" title="Reset" onPress={() => setNumber("1")} />
      <Button
        disabled={!number}
        title="Confirm"
        onPress={() => setIsConfirmed()}
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
