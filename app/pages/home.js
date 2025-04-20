import {View, Text} from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Button } from 'react-native'
import services from '../Shared/services'
import { AuthContext } from '../context/AuthContext'
import WelcomeHeader from '../components/welcomeHeader'
import SearchBar from '../components/SearchBar'
import GlobalApi from '../Shared/GlobalApi'

export default function Home() {
        const {userData,setUserData}=useContext(AuthContext)
        useEffect(()=>{
            getSlider();
        },[])

        const  getSlider=async()=>{
            const result=(await GlobalApi.getSlider()).data;
            console.log("Result",result)
        }
    return (
        <View style={{padding:20}}>
            <WelcomeHeader/>
            <SearchBar/>
        </View>
    )
}