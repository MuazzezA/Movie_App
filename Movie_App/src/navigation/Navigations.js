import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";

import HomeStackScreen from "../screens/HomeStackScreen";
import SettingsStackScreen from "../screens/SettingsStackScreen";

const Tab = createBottomTabNavigator();

export default function Navigations() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#3e2465",
        tabBarInactiveTintColor: "red",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#E4DCCF",
        },
      }}>
      <Tab.Screen
        name="HomeStackScreen"
        component={HomeStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => (
            <Icon
              name="home"
              size={23}
              color={tabInfo.focused ? "#576F72" : "#8e8e93"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsStackScreen"
        component={SettingsStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => (
            <Icon
              name="settings"
              size={23}
              color={tabInfo.focused ? "#576F72" : "#8e8e93"}
            />
          ),
          //tabBarBadge: 3,
          // notifications count
        }}
      />
    </Tab.Navigator>
  );
}
