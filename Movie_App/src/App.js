import React from "react";
import Navigations from "./navigation/Navigations";
import { SafeAreaProvider } from "react-native-safe-area-context";
import OnBoardingStackScreen from "./screens/OnBoardingStackScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <OnBoardingStackScreen />
    </SafeAreaProvider>
  );
}
