import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FavoriteButton from "../components/FavoriteButton";

export default function MovieDetailScreen({ route }) {
  const { movie } = route.params;

  const images = [
    {
      url: movie.i.imageUrl,
    },
    {
      url: "https://vectorified.com/images/no-data-icon-10.png",
    },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
      }}>
      <Image
        style={styles.poster}
        source={{
          uri: movie.hasOwnProperty("i") ? images[0].url : images[1].url,
        }}
      />
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <View style={{ flexDirection: "column", flex: 1 }}>
            <Text style={styles.title}>{movie.l}</Text>
            <Text style={styles.subtitle}>{movie.s}</Text>
          </View>
          <FavoriteButton />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  poster: {
    alignItems: "center",
    height: 320,
    width: "100%",
    resizeMode: "contain",
    padding: 10,
    backgroundColor: "#DFD3C3",
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
    backgroundColor: "#DBC8AC",
    padding: 10,
  },
});
