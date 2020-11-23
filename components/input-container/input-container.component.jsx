import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsConfirmed } from "../../redux/homescreen/homescreen.selectors";
import InputConfirmation from "../input-confirmation/input-confirmation.component";
import NumberInput from "../number-input/number-input.component";

import styles from "./input-container.styles";

const InputContainer = ({ isConfirmed }) => {
  return (
    <View>
      <NumberInput />
      {!isConfirmed && <InputConfirmation />}
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  isConfirmed: selectIsConfirmed,
});

export default connect(mapStateToProps)(InputContainer);
