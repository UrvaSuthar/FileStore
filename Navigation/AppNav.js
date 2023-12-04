import { View, ActivityIndicator } from "react-native";
import React, { useContext } from "react";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../Context/AuthContext";

const AppNav = () => {
  const isAuth = false;
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {userToken !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNav;
