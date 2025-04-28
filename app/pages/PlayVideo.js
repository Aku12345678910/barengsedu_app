import { View, Text, Alert } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import YoutubePlayer from "react-native-youtube-iframe";

export default function PlayVideo() {
    const navigation=useNavigation();
    const param=useRoute().params;
    const [videoChapter,setVideoChapter]=useState([])
    useEffect(()=>{
        setVideoChapter(param.courseContent)
    },[])
    

    const onStateChange = useCallback((state) =>{
        if (state === "ended") {
            setPlaying(false);
           
        }
    },[]);
    return (
        <View style={{padding:20, marginTop :25}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons name="arrow-back-sharp" size={24} color="white" style={{marginRight :10}}/>
            </TouchableOpacity>
            {videoChapter?
            <View>
                <Text style={{padding:10, marginTop :20}}>{videoChapter.name}</Text>
                <YoutubePlayer
                height={220}
                play={playing}
                vidioId={videoChapter.videoUrl}
                onChangeState={onStateChange}
                />
                <Text style={{fontWeight:'bold',marginBottom :10}}>Description</Text>
                <Text style={{lineHeight :20}}>{videoChapter?.description}</Text>
            </View>
            :null}
            
        </View>
    )
}