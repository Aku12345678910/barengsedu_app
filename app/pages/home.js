import {View, Text} from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Button } from 'react-native'
import services from '../Shared/services'
import { AuthContext } from '../context/AuthContext'
import WelcomeHeader from '../components/welcomeHeader'
import SearchBar from '../components/SearchBar'
import GlobalApi from '../Shared/GlobalApi'
import Slider from '../components/Slider'

export default function Home() {
        const {userData,setUserData}=useContext(AuthContext)
        
    return (
        <View style={{padding:20}}>
            <WelcomeHeader/>
            <SearchBar/>
            <Slider/>
        </View>
    )
}