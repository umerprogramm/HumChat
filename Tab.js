import React from 'react'
import { View, Text , StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./home/Home";
// import SettingsScreen from "./settings/Settings";
import {MaterialCommunityIcons,Entypo} from "@expo/vector-icons/";
import Group from './Group/Group';
// import Nav from './nav/Nav';



export default function Tab() {
    const Tab = createBottomTabNavigator();
    return (
        <View style={styles.container}>
                <Tab.Navigator>
        <Tab.Screen
          name="homie"
          component={HomeScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: () => (
              
                <MaterialCommunityIcons
                  size={30}
                  name={"home"}
                />
              
            ),
          }}
        />

<Tab.Screen
          name="video"
          component={Group}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ blue }) => (
              <View>
                <Entypo style={[{ color: blue }]} size={30} name={"video"} />
              </View>
            ),
          }}
        />
          
          
    </Tab.Navigator>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      bottom: 0,
      flexDirection: "row",
      width: "100%",
      height: "40px",
      backgroundColor: "#CAC9C9",
      position: "fixed  ",
      justifyContent: "space-around",
      left: 0,
    },
  });
  