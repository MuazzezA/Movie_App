import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackScreen from '../screens/HomeStackScreen';
import SettingsStackScreen from '../screens/SettingsStackScreen';


const Tab = createBottomTabNavigator();

export default function Navigations(){

    return(
        
        // <NavigationContainer>
        //     <Stack.Navigator initialRouteName = "Home"
        //     screenOptions={{
        //         contentStyle:{
        //           backgroundColor:'#F0EBE3'
        //         }
        //      }}
        //     >
        //         <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        //     </Stack.Navigator>
        // </NavigationContainer>
        <NavigationContainer>
        <Tab.Navigator
        
        initialRouteName = "Home"
            // screenOptions={{
            //     contentStyle:{
            //       backgroundColor:'#F0EBE3',
                  
            //     }
                
            //  }}
             activeColor="#f0edf6"
             inactiveColor="#3e2465"
             barStyle={{ backgroundColor: '#694fad' }}
        >
            <Tab.Screen name="HomeStackScreen" component={HomeStackScreen} options={{headerShown:false}}/>
            <Tab.Screen name="SettingsStackScreen" component={SettingsStackScreen} options={{headerShown:false}}/>
        </Tab.Navigator>
        </NavigationContainer>
    );


}