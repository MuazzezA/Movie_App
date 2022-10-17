import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";

const SettingScreen = () => {
  const data = [
    { key: "Favorite Films", icon: "heart" },
    { key: "Calendar", icon: "calendar" },
    { key: "Profile", icon: "user" },
    { key: "Exit", icon: "log-out" },
    { key: "About", icon: "info" },
  ];

  const ListItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{item.key}</Text>
        <Icon name={item.icon} size={22} style={{ padding: 5 }} />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => ListItem({ item })}></FlatList>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    margin: 5,
    height: 55,
    borderRadius: 30,
    backgroundColor: "#DFD3C3",
    justifyContent: "space-between",
  },
  listItem: {
    flex: 1,
    width: "100%",
  },
  text: {
    fontSize: 16,
    textAlignVertical: "center",
  },
});
