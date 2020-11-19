import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';

export default function App() {

  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  return (
    <View style={styles.screen}>
      <View 
        style={styles.inputContainer}>
        <TextInput 
          placeholder="Course Goal" 
          style={styles.input} 
          value={task}
          onChangeText={text => { setTask(text); }}
        />
        <View style={styles.button}>
          <Button title="ADD" onPress={() => {
            if (task != '') {
              setTaskList([...taskList, task]);
              setTask('');
              }
            }
          } />        
        </View>
        <View>
          <Button style={styles.button} color="red" title="X" onPress={() => {
            setTaskList([]);
            setTask('');
            }
          } />
        </View>
      </View>
        {
          taskList.length === 0 ? (
            <Text>All goals achieved 😄</Text>
          ) :
          <FlatList 
            data={taskList} 
            renderItem={itemData => <View style={styles.listItem}><Text>{itemData.item}</Text></View>} 
            keyExtractor={itemData => itemData.index} 
          />
        }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { 
    padding: 50
  },
  inputContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  input: { 
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    marginBottom: 20,
    width: '75%'
  },
  listItem: {
    alignItems: 'center',
    backgroundColor: '#DA746F',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
  button: {
    marginRight: 2
  }
});