import {  NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect , useContext } from 'react'
import Gun from 'gun/gun'
import SEA from 'gun/sea'
import { View, Text ,ScrollView} from 'react-native'
import Chats from './Chats'



export default function Humchat(props) {

  const [state, setstate] = useState([])


    useEffect(   () => {

     
      fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => setstate(data))
      .catch(err => console.error(err));;
        


      
    
    []}); 
    return (
        <View>
<ScrollView>

{state.map((val) => {

  return (
    <Chats

      key={val._id}
      username={val.name}
      avator={val.avator}
      message={[val.messages]}

    />
    )
    

    
  })}
  
  </ScrollView>

        </View>
    )
}

