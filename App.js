import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View 
        style={{ 
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
        <TextInput 
          placeholder="Course Goal" 
          style={{ 
            borderBottomColor: 'black', 
            borderBottomWidth: 1, 
            marginBottom: 10,
            width: '80%'
          }} 
        />
        <Button title="ADD" />
      </View>
      <View>
      
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
