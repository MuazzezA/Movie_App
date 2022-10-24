import React from "react";
import { View, ImageBackground, Text } from "react-native";
const NoData = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 350,
        width: 350,
      }}>
      <ImageBackground
        source={require("./../assets/icons/No_data-cuate.png")}
        style={{ height: 300, width: 300 }}></ImageBackground>
      <Text>Are You Sure? We Couldn't Find Anything About It</Text>
      <Text>Please Try Again</Text>
    </View>
  );
};

export default NoData;
