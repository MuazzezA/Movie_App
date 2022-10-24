import React from "react";
import {
  View,
  Animated,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
} from "react-native";
const { width, height } = Dimensions.get("window");
import { theme } from "../constants";
const { FONTS } = theme;

const onBoardings = [
  {
    title: "Lets Find Your Movie",
    description: "lorem ipsum....",
  },
  {
    title: "IMDB",
    description: "lorem ipsum....",
  },
];

const OnBoardingScreen = ({ navigation }) => {
  return (
    <Animated.ScrollView horizontal scrollEnabled pagingEnabled>
      {onBoardings.map((item, index) => (
        <View style={styles.container} key={`c-${index}`}>
          <View style={styles.text}>
            <Text style={{ ...FONTS.h1 }}>{item.title}</Text>
            <Text style={{ ...FONTS.h3, color: "grey" }}>
              {item.description}
            </Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => navigation.replace("Navigations")}>
              <Text style={{ textAlign: "center" }}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </Animated.ScrollView>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DFD3C3",
  },
  text: {
    height: height - 70,
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: 30,
    width: 120,
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0EBE3",
    borderRadius: 20,
  },
});
