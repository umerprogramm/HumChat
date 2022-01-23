import React from 'react'
import { View, Text, Image,StyleSheet} from 'react-native'
import { Avatar } from "react-native-elements";
import {Entypo,FontAwesome5,FontAwesome}  from "react-native-vector-icons"



export default function Post(props) {

    return (
  
             <View >

                 <View style={styles.post_top}>  
            <Avatar
                size="medium"
                rounded
                ContainerStyle={{border: "2px solid green"}}

                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                source={{ uri: props.avator }}
                />
               

                <Text  style={{marginLeft: '5px'}} ><h3><i>{props.username}</i></h3></Text>
           
            </View>
            <Image source={{ uri: props.thought, width: 'auto', height: "300px" }} />
            <View style={styles.post_bottom}>
      
<Entypo name="heart"  size={30} color="#3b5998"/>
<FontAwesome5 name="comment-dots" size={30}/>
<FontAwesome name="share" size={30}/>


</View>

</View>


    )
}


const styles = StyleSheet.create({

    post_top:{
        flexDirection:'row',
        padding: '5px',
        backgroundColor:'rgb(220,220,220)',
        
    },

    post_bottom: {
        flexDirection:'row',
        paddingBottom: '50px',
        paddingLeft:"15px",
        justifyContent:'space-around',
        backgroundColor:'rgb(211,211,211)',
        borderBottomColor:'black',
        borderBottomWidth: 1
}

});