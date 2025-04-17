import {View, Text} from 'react-native'
import React, { useContext } from 'react'
import { Button } from 'react-native-web'
import services from '../Shared/services'
import { AuthContext } from '../context/AuthContext'

export default function Home() {
        const {userData,setUserData}=useContext(AuthContext)
    return (
        <View>
            <Button title="Logout" onPress={()=>{services.Logout();setUserData(null)}}/>
        </View>
    )
}