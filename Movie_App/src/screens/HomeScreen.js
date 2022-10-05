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

export default function HomeScreen({ navigation }) {
  const temp = [
    {
      i: {
        height: 1500,
        imageUrl: "https://m.media-amazon.com/images/I/314t8YNB69L.png",
        width: 1013,
      },
      id: "/trailers",
      l: "IMDb Trailers",
      s: "Recent and Popular Trailers",
    },
  ];

  const noData = [
    {
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
      i: {
        height: 1500,
        imageUrl: "./../assets/Search_engines-cuate.png",
        width: 1013,
      },
      l: "I dont Found Data For Search",
      s: "",
    },
  ];

  const [search, setSearch] = useState("");
  const [movieList, setlist] = useState([]);
  const [dataCode, setDataCode] = useState(2);
  // 0- no data found
  // 1- data found
  // 2- no search

  const movieContainer = ({ item }) => {
    if (dataCode == 0) {
      return (
        <View style={styles.container}>
          <ImageBackground
            source={require("./../assets/No_data-cuate.png")}
            style={styles.image}>
            <Text style={styles.title}>{item.l}</Text>
            <Text style={styles.subtitle}>{item.s}</Text>
          </ImageBackground>
        </View>
      );
    } else if (dataCode == 1) {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MovieDetail");
          }}>
          <View style={styles.container}>
            <Text style={styles.title}>{item.l}</Text>
            <Text style={styles.subtitle}>{item.s}</Text>
            <Image
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

  const searchMovie = () => {
    console.log("Search button pressed" + search);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c8b647e608mshed7438edd4a66fap1224cbjsn00fc99f79b87",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };

    if (search == "") {
      setDataCode(2);
      setlist(noSearch);
    } else {
      fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${search}`, options)
        .then((response) => response.json())
        .then((data) => {
          if (data.d != null) {
            console.log("Data Found");
            setDataCode(1);
            setlist(data.d);
          } else if (data.d == null) {
            console.log("No Data Found");
            setDataCode(0);
            setlist(noData);
          }
        })
        .catch((err) => console.error(err));
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
    width: 320,
    borderWidth: 1,
    padding: 10,
    margin: 15,
    borderRadius: 20,
    borderColor: "#576F72",
    backgroundColor: "#7D9D9C",
  },
  poster: {
    alignItems: "center",
    width: 250,
    height: 250,
    resizeMode: "contain",
    margin: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
