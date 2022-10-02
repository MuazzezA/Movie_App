import React from 'react';
import HomeScreen from './HomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();



export default function HomeStackScreen() {

    return(

    <HomeStack.Navigator
        screenOptions={{
            contentStyle:{
            backgroundColor:'#F0EBE3'
            }
        }}
    >
        <HomeStack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
    </HomeStack.Navigator>

    );

}
