import React, { useState , useContext } from 'react'
import { View, Text ,StyleSheet,TouchableOpacity,ActivityIndicator} from 'react-native'
import { Avatar } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';
import Chat_room from '../chat_room/Chat_room';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Context } from '../sign up/Context';

export default function Chats( props ) {
    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();
    const name = useContext(Context)



    return (
        <View>
               <TouchableOpacity
                onPress={() => navigation.navigate('chatroom',{username:props.username,message:props.message,avator:props.avator})}
               >
          <View style={Styles.container}>
             <Avatar
                size="medium"
                rounded
                containerStyle={{marginLeft: "5px"}}
                
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                source={{ uri: props.avator }}
                />
                
                <Text style={{paddingLeft:"4px"}}><h4>{props.username}{"\n"}</h4><p>{props.message}</p></Text>
        
  
        </View>
                </TouchableOpacity>
                {/* <ActivityIndicator size="small" /> */}
                <Stack.Screen name="chatroom" component={Chat_room}/>    
        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        paddingRight:"20px",
      backgroundColor:"rgb(220,220,220)",
      flexDirection:'row',
     
      
    }
})
