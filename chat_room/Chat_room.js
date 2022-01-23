import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { Input } from 'react-native-elements/dist/input/Input'
import { Entypo } from "react-native-vector-icons"
import { useRoute } from '@react-navigation/native';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';


export default function Chat_room() {
  const route = useRoute();
  const [state, setstate] = useState()
  const [state2, setstate2] = useState(["hello"])
  const handleSubmit = (e) => {
    e.preventDefault();
setstate2([...state2, state])
setstate('')
  };
  return (
    <View>

         
                
      <View style={Styles.other_person}>
      <Text >{`${'\n',route.params.message}`} </Text>
      </View>
         

        {state2.map(
          val =>{
            return val
          }
        )}
        
      
      <Input placeholder="Type your message"
      value={state}
        onChange={(e) => setstate(e.target.value)}

      />
      <TouchableOpacity>
        <Entypo name="twitter-with-circle" size={40}
          onPress={handleSubmit}

type='ionicon'        />
      </TouchableOpacity>
    </View>
  )
}
const Styles = StyleSheet.create({
          other_person:{
       
            paddingLeft:"-10px",
          
          }
})