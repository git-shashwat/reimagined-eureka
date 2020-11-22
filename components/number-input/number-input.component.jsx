import React from "react";
import { View, TextInput } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectNumber,
  selectIsConfirmed,
} from "../../redux/homescreen/homescreen.selectors";
import { setNumber } from "../../redux/homescreen/homescreen.actions";

const NumberInput = ({ number, isConfirmed, setNumber }) => {
  const handleNumberChange = (text) => {
    const formattedNumber = text.replace(/\D+/g, "");
    setNumber(formattedNumber);
  };

  return (
    <View>
      <TextInput
        keyboardType="number-pad"
        placeholder="Enter number here..."
        editable={!isConfirmed}
        value={number}
        onChangeText={(text) => handleNumberChange(text)}
      />
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  number: selectNumber,
  isConfirmed: selectIsConfirmed,
});

const mapDispatchToProps = (dispatch) => ({
  setNumber: (number) => dispatch(setNumber(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NumberInput);
