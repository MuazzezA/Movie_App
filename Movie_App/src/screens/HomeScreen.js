import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import fetchSeachMovie from "../services/fetch_seachMovie";

export default function HomeScreen({ navigation }) {
  const noData = [
    {
      id: "1",
      i: {
        height: 1500,
        imageUrl: "./../assets/No_data-cuate.png",
        width: 1013,
      },
      l: "I dont Found Data For Search",
      s: "",
    },
  ];

  const noSearch = [
    {
      id: "1",
      i: {
        height: 1500,
        imageUrl: "./../assets/Search_engines-cuate.png",
        width: 1013,
      },
      l: "Please Search Movie",
      s: "",
    },
  ];

  const [search, setSearch] = useState("");
  const [movieList, setMoviesList] = useState(noSearch);
  const [dataCode, setDataCode] = useState(2);
  // 0- no data found
  // 1- data found
  // 2- no search

  const movieContainer = ({ item }) => {
    if (dataCode == 0) {
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
            source={require("./../assets/No_data-cuate.png")}
            style={{ height: 300, width: 300 }}></ImageBackground>
        </View>
      );
    } else if (dataCode == 1) {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MovieDetail", { movie: item });
          }}>
          <View style={styles.container}>
            <Text style={styles.title}>{item.l}</Text>
            <Text style={styles.subtitle}>{item.s}</Text>

            <Image
              flex={1}
              style={styles.poster}
              source={{
                uri: item.i.imageUrl,
              }}
            />
          </View>
        </TouchableOpacity>
      );
    } else if (dataCode == 2) {
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
    }
  };

  const searchMovie = async () => {
    if (search == "") {
      setDataCode(2);
      setMoviesList(noSearch);
    } else {
      const data = await fetchSeachMovie({ search });

      if (data.d == "") {
        setDataCode(0);
        setMoviesList(noData);
      } else if (data.d != "") {
        setDataCode(1);
        setMoviesList(data.d);
      }
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            marginVertical: 15,
          }}>
          <TextInput
            style={styles.input}
            onChangeText={(input) => {
              setSearch(input);
            }}
          />

          <TouchableOpacity
            style={{ justifyContent: "center", alignContent: "center" }}
            onPress={() => {
              searchMovie();
            }}>
            <Icon name="search" size={20} style={{ marginLeft: 10 }} />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", flex: 1 }}>
          <FlatList
            data={movieList}
            renderItem={movieContainer}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 280,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    borderColor: "grey",
    backgroundColor: "white",
  },
  container: {
    alignItems: "center",
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
    height: 250,
    width: 230,
    resizeMode: "contain",
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
