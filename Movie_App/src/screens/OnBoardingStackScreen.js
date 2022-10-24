import React from "react";
import OnBoardingScreen from "./OnBoardingScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigations from "../navigation/Navigations";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();

export default function OnBoardingStackScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRoute="OnBoardingScreen"
        screenOptions={{
          contentStyle: {
            backgroundColor: "#F0EBE3",
          },
        }}>
        <Stack.Screen
          name="OnBoardingScreen"
          component={OnBoardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Navigations"
          component={Navigations}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
