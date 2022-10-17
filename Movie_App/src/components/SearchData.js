import React from "react";
import { View, ImageBackground, Text } from "react-native";

const SearchData = () => {
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
        source={require("./../assets/Search_engines-cuate.png")}
        style={{ height: 300, width: 300 }}></ImageBackground>
      <Text>Let's Start Looking For Something</Text>
    </View>
  );
};

export default SearchData;
