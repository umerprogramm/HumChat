import React, { useState ,createContext  } from 'react'
import { View, Text ,Button } from 'react-native'
import GoogleButton from 'react-google-button'
import { auth, provider } from "./Firebase"
import {  signInWithPopup } from "firebase/auth";
import Tab2, { MyTabs } from '../App';
import Chats from '../Hum_chat/Chats';

export const Context = createContext();




  function Sign_up() {
    
  const [state, setstate] = useState('')


 async function Singn(){
    
  signInWithPopup(auth,provider)
    .then((result) => {
    setstate(result.user.displayName)
   localStorage.setItem("humlog",result.user.photoURL)

})
    .catch((error) => alert("sorry,you cannot sign in", error));
    
 
  }

    return (
<>

      
        {state!==''?<MyTabs/>:
        <>
     
        <View style={{ justifyContent: 'center', alignItems: 'center' , paddingTop : '50px' }}>
        
      
        <Text><h1>Humchat</h1></Text>
          
         
        </View>
        <View  style={{ flex: 0.7, justifyContent: 'center', alignItems: 'center' }}>
<GoogleButton
type='light'
  onClick={Singn}
/>

    </View>
    </>
  }
        </>
        
    )
  

}
export default Sign_up
