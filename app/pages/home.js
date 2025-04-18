import {View, Text} from 'react-native'
import React, { useContext } from 'react'
import { Button } from 'react-native'
import services from '../Shared/services'
import { AuthContext } from '../context/AuthContext'
import WelcomeHeader from '../components/welcomeHeader'
import SearchBar from '../components/SearchBar'

export default function Home() {
        const {userData,setUserData}=useContext(AuthContext)
    return (
        <View style={{padding:20}}>
            <WelcomeHeader/>
            <SearchBar/>
        </View>
    )
}