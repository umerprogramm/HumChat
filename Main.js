import React, { useContext  } from 'react'
import { View, Text } from 'react-native'
import   {Context}  from './sign up/Context';

export default function Main() {
    const con = useContext(Context)
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{con }</Text>
        </View>
    )
}
