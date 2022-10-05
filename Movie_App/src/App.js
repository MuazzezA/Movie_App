import React from "react";
import Navigations from "./navigation/Navigations";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigations />
    </SafeAreaProvider>
  );
}
