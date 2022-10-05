import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MovieDetailScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <View style={{ flex: 1 }}></View>
    </SafeAreaView>
  );
}
