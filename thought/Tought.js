import React, { useState, useEffect } from 'react'
import { ScrollView, Settings, Text, View, } from 'react-native';
import Post from '../Post_images/Post';

export default function Tought() {
  const [state, setstate] = useState([])
  let data;
  useEffect(async () => {
    try {
      let response = await fetch("http://localhost:3000/");
      data = await response.json();
      setstate(data)
    } catch (err) {
      console.error(err);
    }

  }, []);

  return (
    
  <View style={{flex: 1}}>
<ScrollView>

      {state.map((val) => {

        return (
          <Post

            key={val._id}
            username={val.name}
            thought={val.thought}
            avator={val.avator}

          />
          )
          
          
          
          
        })}
        </ScrollView>


    </View>
  );
}