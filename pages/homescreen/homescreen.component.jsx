import React from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import InputContainer from "../../components/input-container/input-container.component";
import StartBtn from "../../components/start-btn/start-btn.component";
import { selectIsConfirmed } from "../../redux/homescreen/homescreen.selectors";
import styles from "./homescreen.styles";

const animationData = require("../../assets/lottie/question-mark-dark.json");

const HomeScreen = ({ navigation, isConfirmed }) => {
  return (
    <View style={styles.homescreen}>
      <LottieView
        source={animationData}
        autoPlay
        loop={false}
        style={{
          marginBottom: 140,
        }}
      />
      {!isConfirmed && (
        <View style={styles.message}>
          <Text style={{ fontSize: 24 }}>
            Enter a number to start the game!
          </Text>
        </View>
      )}
      <InputContainer />
      {isConfirmed && <StartBtn navigation={navigation} />}
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  isConfirmed: selectIsConfirmed,
});

export default connect(mapStateToProps)(HomeScreen);
