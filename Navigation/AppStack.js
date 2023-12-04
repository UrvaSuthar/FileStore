import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";

export default function AppStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
