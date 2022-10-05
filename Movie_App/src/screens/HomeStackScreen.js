import React from "react";
import HomeScreen from "./HomeScreen";
import MovieDetailScreen from "./MovieDetailScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: "#F0EBE3",
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="MovieDetail"
        component={MovieDetailScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}
