import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import InputContainer from "../../components/input-container/input-container.component";
import StartBtn from "../../components/start-btn/start-btn.component";
import { selectIsConfirmed } from "../../redux/homescreen/homescreen.selectors";
import styles from "./homescreen.styles";

const HomeScreen = ({ navigation, isConfirmed }) => {
  return (
    <View style={styles.homescreen}>
      {isConfirmed ? (
        <StartBtn navigation={navigation} />
      ) : (
        <View style={styles.message}>
          <Text style={{ fontSize: 24 }}>
            Enter a number to start the game!
          </Text>
        </View>
      )}
      <InputContainer />
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  isConfirmed: selectIsConfirmed,
});

export default connect(mapStateToProps)(HomeScreen);
