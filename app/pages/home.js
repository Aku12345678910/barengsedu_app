import {View, Text} from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Button } from 'react-native'
import services from '../Shared/services'
import { AuthContext } from '../context/AuthContext'
import WelcomeHeader from '../components/WelcomeHeader'
import SearchBar from '../components/SearchBar'
import GlobalApi from '../Shared/GlobalApi'
import Slider from '../components/Slider'
import CourseList from '../components/CourseList'
import VideoCourseList from '../components/VideoCourseList'
import { ScrollView } from 'react-native'

export default function Home() {
        const {userData,setUserData}=useContext(AuthContext)
        
    return (
        <ScrollView style={{padding:20}}>
            <WelcomeHeader/>
            <SearchBar/>
            <Slider/>
            <VideoCourseList/>
            <CourseList type={'basic'} />
            <CourseList type={'advance'} />
        </ScrollView>
    )
}