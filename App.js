import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGoalAddition = (task) => {
    if (task != "") {
      setTaskList([...taskList, { id: `${taskList.length + 1}`, title: task }]);
    }
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleGoalDeletion = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={handleModalToggle} />
      <GoalInput
        isModalOpen={isModalOpen}
        toggleModal={handleModalToggle}
        handleGoalAddition={handleGoalAddition}
      />
      {taskList.length === 0 ? (
        <View style={styles.emptyListAlert}>
          <Text>All goals achieved 😄</Text>
        </View>
      ) : (
        <FlatList
          data={taskList}
          renderItem={(itemData) => (
            <GoalItem goal={itemData.item} onDelete={handleGoalDeletion} />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  emptyListAlert: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
