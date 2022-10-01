import React, {useState} from "react";
import { TextInput, View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ImageBackground} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';


export default function HomeScreen() {

    

    const temp = [
        {
        "i":{
        "height":1500,
        "imageUrl":"https://m.media-amazon.com/images/I/314t8YNB69L.png",
        "width":1013
        },
        "id":"/trailers",
        "l":"IMDb Trailers",
        "s":"Recent and Popular Trailers"
        }
    ]

    const [search, setSearch] = useState('movie');
    const [movieList, setlist] = useState(temp);

    const movieContainer = ({item}) => {
        
    return(
        <View style={styles.container}>
            
            <Text style={styles.title}>{item.l}</Text>
            <Text style={styles.subtitle}>{item.s}</Text>
                
            <Image
                style={styles.poster}
                source={{
                    uri: movieList ? item.i.imageUrl : "https://m.media-amazon.com/images/I/314t8YNB69L.png",
                }}
            />

        </View>
        );
    }
    

    return(
        <SafeAreaView
            style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center'}}
        >
        <View style={{flex:1}}>
                <View style={{flexDirection:"row", justifyContent:"center", alignContent:"center", marginVertical:15}}>
                    <TextInput style={styles.input}>

                    </TextInput>
                    <TouchableOpacity
                        style={{justifyContent:"center", alignContent:"center"}}
                        onPress={
                            (input) => {
                                setSearch(input);
                                console.log("Search button pressed" + search);
                                const options = {
                                    method: 'GET',
                                    headers: {
                                        'X-RapidAPI-Key': 'c8b647e608mshed7438edd4a66fap1224cbjsn00fc99f79b87',
                                        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
                                    }
                                };
                                
                                fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${search}`, options)
                                    .then(response => response.json())
                                    .then(data => {
                                        
                                        setlist(data.d);
                                        
                                        // list.map((item) => {
                                        //     const name = item.l;
                                        //     const poster = item.i.imageUrl;
                                        //     const movie = '<li><img src="' + poster + '" alt="' + name + '"></li>';
                                        // })
                                    }).catch(err => console.error(err));


                                
                            }
                        }
                    >
                        {/* <Text style={styles.button}>Search</Text> */}
                        <Icon name="search" size={20} style={{marginLeft:10}}/>
                    </TouchableOpacity>

                </View>

                <View style={{alignItems:'center', flex:1}}>

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
        borderColor: 'grey',
        backgroundColor: 'white',
    },
    container: {
        alignItems: 'center',
        height:350,
        width: 320,
        borderWidth: 1,
        padding: 10,
        margin:15,
        borderRadius: 20,
        borderColor: 'black',
        backgroundColor: 'grey',
    },
    poster:{
        alignItems: 'center',
        height:250,
        width: 250,
        margin:15,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    
});