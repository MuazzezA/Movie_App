import React from "react";
import { View, ImageBackground } from "react-native";

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
    </View>
  );
};

export default SearchData;
