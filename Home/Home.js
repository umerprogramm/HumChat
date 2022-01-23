import React, { useState, useEffect } from "react";
import { ScrollView, Settings, Text, View, Alert, Button } from "react-native";
import Gun from "gun";
export default function HomeScreen() {
  const [state, setstate] = useState("");
  const [state1, setstate1] = useState("");
  const [state2, setstate2] = useState("");


  useEffect(   () => {


  []}); 
  const handleSubmit = (e) => {
    e.preventDefault();
   setstate1(state)
   setstate('')
   localStorage.setItem('sms',state)
   let set = localStorage.getItem('sms') 
   setstate2(set)
  };
  
 
  
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{state2}</Text>
      <input
        placeholder="type something"
        value={state}
        onChange={(e) => setstate(e.target.value)}
      />
      <Button onPress={handleSubmit} title={"click"} color="#DC143C" />
    </View>
  );
}
