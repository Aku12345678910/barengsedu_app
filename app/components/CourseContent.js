import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import colors from '../Shared/colors';
import { useNavigation } from 'expo-router';

export default function CourseContent({course}) {
        const navigation=useNavigation();
        useEffect(()=>{
            console.log("userProgress",userProgress)
        })
        const checkUserProgress=(contentId)=>{
            return userProgress.find(item=>item.courseContentId==contentId)
        } 


    return (
        <View style={{marginTop :10}}>
             <Text style={{fontWeight:'bold', 
            fontSize:16}}>Course Content</Text>
            <FlatList
            style={{marginTop :10}}
            data={course?.Topic}
            renderItem={({item,index})=>(
                <TouchableOpacity onPress={()=>
                    navigation.navigate('course-chapter',
                    {courseContent:item,
                        courseId:course.id,  
                    })} style={{display:'flex',
                    flexDirection:'row',backgroundColor:colors.white,marginBottom :10,
                    padding:13,alignItems:'center',borderRadius:5}}>     
                    { checkUserProgress(item.id)? <Ionicons name="checkmark-circle" size={24} 
                      style={{marginRight :20}} />:null}
                        <Text style={{fontWeight:'bold',fontSize:20,
                            color:colors.gray,marginRight :20}}>{index+1}</Text>
                        <Text style={{fontSize:15,fontWeight:'bold'}}>
                            {item.Topic?item.Topic:item.name}</Text>
                        <Ionicons name="play-circle" size={24} 
                        style={{position:'absolute', right :10}}
                        color={colors.primary} />
                </TouchableOpacity>    
                )}
            />  
        </View>                      
    )
}
