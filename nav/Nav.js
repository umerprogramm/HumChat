import React from "react";
import { View, StyleSheet} from "react-native";
import Home from "../Home/Home";
import Video from "../video/Video";
import Friend from "../Friend/Friend";
import Group from "../Group/Group";
import Menus from "../menu/Menu";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons/";
export default function Nav() {
  const Menu = createBottomTabNavigator();

  return (
    <View style={styles.container}>
      <Menu.Navigator    
      >
        <Menu.Screen
          name="homie"
          component={Home}
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

        <Menu.Screen
          name="video"
          component={Video}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ blue }) => (
              <View>
                <Entypo style={[{ color: blue }]} size={30} name={"video"} />
              </View>
            ),
          }}
        />
        <Menu.Screen
          name="gruop"
          component={Group}
          options={{
            tabBarLabel: "",    
            tabBarIcon: ({ blue }) => ( 
              <View>
                <MaterialCommunityIcons
                  style={[{ color: blue }]}
                  size={30}
                  name={"account-group"}
                />
              </View>
            ),
          }}
        />

        <Menu.Screen
          name="friend"
          component={Friend}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ blue }) => (
              <View>
                <FontAwesome5
                  style={[{ color: blue }]}
                  size={30}
                  name={"user-friends"}
                />
              </View>
            ),
          }}
        />

        <Menu.Screen
          name="meun"
          component={Menus}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ blue }) => (
              <View>
                <Ionicons style={[{ color: blue }]} size={30} name={""} />
              </View>
            ),
          }}
        />
      </Menu.Navigator>
    </View>
  );
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
