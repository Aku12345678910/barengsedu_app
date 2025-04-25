import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../pages/home';
import CourseDetails from '../pages/CourseDetails';
import CourseChapter from '../pages/CourseChapter';

const Stack = createNativeStackNavigator();
export default function HomeNavigation() {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="home" component={Home}></Stack.Screen>
            <Stack.Screen name="course-detail" component={CourseDetailsDetails} />
            <Stack.Screen name="course-chapter" component={CourseChapter}/>
        </Stack.Navigator>
    )
}