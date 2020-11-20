import React, { useState } from "react";
import { View, Button, StyleSheet, TextInput, Modal } from "react-native";

export default ({ handleGoalAddition, toggleModal, isModalOpen }) => {
  const [task, setTask] = useState("");

  return (
    <Modal
      visible={isModalOpen}
      onRequestClose={toggleModal}
      animationType="slide"
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          value={task}
          onChangeText={(text) => {
            setTask(text);
          }}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="ADD"
              onPress={() => {
                handleGoalAddition(task);
                setTask("");
                toggleModal();
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="red"
              onPress={() => {
                toggleModal();
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 20,
    width: "75%",
  },
  buttonContainer: {
    flexDirection: "row-reverse",
    width: "60%",
  },
  button: {
    marginHorizontal: 5,
    width: "40%",
  },
});
