import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LogIn from "./Screens/LogIn";
import Register from "./Screens/Register";
import Home from "./Screens/Home";

import AuthStack from "./Navigation/AuthStack";
import AppStack from "./Navigation/AppStack";
import { AuthProvider } from "./Context/AuthContext";
import AppNav from "./Navigation/AppNav";

const App = () => {
  const Stack = createStackNavigator();
  const isAuth = false;

  return (
    <AuthProvider>
      <AppNav/>
     </AuthProvider>
  );
};

export default App;
