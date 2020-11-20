import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default ({ goal: { id, title }, onDelete }) => {
  return (
    <TouchableOpacity onPress={() => onDelete(id)}>
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    alignItems: "center",
    backgroundColor: "#DA746F",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
});
