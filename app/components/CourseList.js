import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../Shared/GlobalApi";
import { FlatList } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../Shared/colors";

export default function CourseList({type}) {
        const [CourseList,setCourseList]=useState([])
        useEffect(()=>{
            console.log("Type",type);
            getCourseList();
        })

        const getCourseList=async()=>{
            const resp=(await GlobalApi.getCourseList(type)).data;
            const result=resp.data.map((item)=>({
                id:item.id,
                name:item.attributes.name,
                description:item.attributes.description,
                image:item.attributes.image.data.attributes.url,
                Topic:item.attributes.Topic
            }))
            console.log(result);
            setCourseList(result);
        }
    return (
        <View style={{marginTop :10}}>
            <Text style={{fontSize:20,fontWeight:'bold',
                textTransform:'capitalize', marginBottom :3}}>{type} Course</Text>
            <FlatList
            data={CourseList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=>(
                <View style={{backgroundColor:Colors.white,marginRight :10,borderRadius:10}}>
                    <Image source={{uri:item.image}} 
                    style={{width :200, height :120, borderRadius:10}} /> 
                    <View style={{padding:10}}>
                    <Text style={{fontWeight:'bold',fontSize:15}}>{item.name}</Text>
                    <Text style={{color:colors.gray, fontWeight:'300'}}>{item.Topic?.length} Lessons</Text>
                    </View>
                    
                </View>
            )}
            />
        </View>
    )
}