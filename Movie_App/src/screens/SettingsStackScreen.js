import React from "react";
import { View, Text } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function SettingsStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: "#F0EBE3",
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen1}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function HomeScreen1() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}
