import React,{useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./home/Home";
import Tought from "./thought/Tought"
import Video from "./video/Video"
import {MaterialCommunityIcons,FontAwesome}  from "react-native-vector-icons"
import Humchat from './Hum_chat/Humchat';
import Chat_room from './chat_room/Chat_room';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, View } from 'react-native';
import Sign_up from './sign up/Sign_up';
import  Com  from "./sign up/Context";
import { Avatar } from "react-native-elements";






const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

 function MyTabs() {
   
  return (
<>

    <Tab.Navigator>
      
        <Tab.Screen
         name="hUm cHat"
         component={Tab2}
         options={{
          tabBarLabel: '',
          headerShown: false,
         
          title:"hUm cHat",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="message-bulleted" size={30} />
          ),
        }}
         />
    <Tab.Screen
        name="SettingsScreen"
        component={Tought}
        options={{
          tabBarLabel: '',
          headerStyle: {
            height:"54px",
           
          },
          title:"hUm lOg",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="thought-bubble" size={30} />
          ),
        }}
      /> 

      
      
      
      
      </Tab.Navigator>
      

    </>
  );
}


function Tab2(){
  return(
 
         <Stack.Navigator>
             <Stack.Screen
        name="hUm cHat"
             component={Humchat}
             options={() => ({
              headerRight:() => (
                <View style={{flexDirection:"row"}}>

                <Avatar
                size="medium"
                rounded
                containerStyle={{marginLeft: "5px",marginRight:'5px'}}
                
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                source={{ uri :''}}
                />           
               
                </View>
                )
      
      
            })}
   
      />
         <Stack.Screen name="chatroom" 
      
      component={Chat_room}
      
      options={({route}) => ({
        headerBackImageSource:"https://cdn1.iconfinder.com/data/icons/duotone-essentials/24/chevron_backward-512.png",
        title: route.params.username,
        headerRight:() => (
          <View style={{flexDirection:"row"}}>
          <TouchableOpacity>
          <View style={{padding:10,alignItems:"center",justifyContent:"space-around"}}>
          <FontAwesome name="phone" size={26}/>
          </View >
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={{padding:10,alignItems:"center",justifyContent:"space-around"}}>
          <FontAwesome name="video-camera" size={26}/>
       
          
          </View>
          </TouchableOpacity>
          </View>
          )


      })}
      
      />
         </Stack.Navigator>
   
  )
}

 function App() {
  return (
<>

    <NavigationContainer>
      <Sign_up/>


    </NavigationContainer>


   
</>






      
  );
}
export default App 
export {MyTabs}
