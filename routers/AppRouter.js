import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../pages/homescreen/homescreen.component";
import Game from "../pages/game/game.component";
import Summary from "../pages/summary/summary.component";

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Guess a Number" }}
        />
        <Stack.Screen
          name="Game"
          component={Game}
          options={{ title: "Help me out", headerLeft: null }}
        />
        <Stack.Screen
          name="Summary"
          component={Summary}
          options={{ title: "Summary", headerLeft: null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
