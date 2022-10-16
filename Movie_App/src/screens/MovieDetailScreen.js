import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";

export default function MovieDetailScreen({ route }) {
  const { movie } = route.params;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
      }}>
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <View style={{ flexDirection: "column", flex: 1 }}>
            <Text style={styles.title}>{movie.l}</Text>
            <Text style={styles.subtitle}>{movie.s}</Text>
          </View>
          <Icon name="heart" size={22} style={{ padding: 5 }} />
        </View>

        <Image
          style={styles.poster}
          source={{
            uri: movie.hasOwnProperty("i")
              ? movie.i.imageUrl
              : "https://vectorified.com/images/no-data-icon-10.png",
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: 300,
    borderWidth: 1,
    padding: 10,
    marginVertical: 15,
    borderRadius: 20,
    borderColor: "#576F72",
    backgroundColor: "#E4DCCF",
  },
  poster: {
    alignItems: "center",
    height: 320,
    width: "100%",
    resizeMode: "contain",
    padding: 10,
    backgroundColor: "black",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    height: 75,
    width: "100%",
    backgroundColor: "#b4fCCF",
    padding: 10,
  },
});
