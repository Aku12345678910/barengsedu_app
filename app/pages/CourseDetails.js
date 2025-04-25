import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState} from 'react';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../Shared/colors';
import CourseContent from '../components/CourseContent';
import { useNavigation } from 'expo-router';

export default function CourseDetails() {
    const param=useRoute().params;
    const [course,setCourse]=useState([])
    const navigation=useNavigation();
    useEffect(()=>{
        setCourse(param.courseData);
    },[])
    return (
        <View style={{padding:20,paddingTop :50}}>
             <TouchableOpacity onPress={()=>navigation.goBack()}>
             <Ionicons name="arrow-back-sharp" size={24} color="white" style={{marginRight :10}}/>
             </TouchableOpacity>
            
                <View>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>{course.name}</Text>
                    <Text style={{color:colors.gray}}>BarengSaya Co</Text>
                    <Image source={{uri:course.image}} 
                    style={{height :150,marginTop :10,borderRadius:10}} />
                    <Text style={{marginTop :10,fontWeight:'bold',
                        fontSize:16}}>About Course</Text>
                    <Text numberOfLines={4}
                    style={{color:colors.gray}}>{course.description}</Text>
                </View>
                <CourseContent course={course}/>
                
        </View>
    )
}