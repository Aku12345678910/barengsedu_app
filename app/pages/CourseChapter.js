import { View, Text, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import { FlatList } from 'react-native';
import colors from '../Shared/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ProgressBar from '../components/ProgressBar';
import services from '../Shared/services';
import GlobalApi from '../Shared/GlobalApi';
import { AuthContext } from '../context/AuthContext';

export default function CourseChapter() {
    const navigation=useNavigation();
    const param=useRoute().params;
    const [chapter,setChapter]=useState([])
    const [run,setRun]=useState(false);
    const [progrees,setProgress]=useState(0);
    const {userData,setUserData}=userContext(AuthContext);
    let chapterRef;
    
    useEffect(()=>{
        setProgress(0);
        setChapter(param.courseContent.Content)
    },[])
    const onClickNext=(index)=>{
        setRun(false);
        setProgress(index+1/chapter.length)
        try{
            chapterRef.scrollToIndex({animated:true,index:index+1})
        }
        catch(e) 
        {
            let coursePro;
            const data={
                data:{
                    uid:userData.id,
                    courseId:param.courseId,
                    courseContentId:param.courseContent.id
                }
            }
            GlobalApi.setCourseProgress(data).then(resp=>{
                navigation.goBack()
            })
           
        }
    }
    return (
        <View style={{padding:20,paddingTop :50,flex:1}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons name="arrow-back-sharp" size={24} color="white" style={{marginRight :10}}/>
                </TouchableOpacity>
                <ProgressBar progrees={progrees}/>
                <FlatList
                    data={chapter}
                    horizontal={true}
                    pagingEnabled
                    ref={(ref)=>{
                        chapterRef=ref
                    }}
                    renderItem={({item,index}) =>(
                        <View style={{width :Dimensions.get('screen').width*0.85,
                        marginRight :15,padding:10}}>
                            <Text style={{fontSize:18,fontWeight:'bold'}}>{item.name}</Text>
                            <Text>{item.description}</Text>
                            {item.input!=''?  
                            <View>
                                <View style={{backgroundColor:colors.black,
                                padding:20,borderRadius:10}}>
                                    <Text style={{color:colors.white}}>{item.input}</Text>
                                </View>
                                <TouchableOpacity style={{backgroundColor:colors.white,
                                padding:5,borderRadius:5,
                                marginTop :10,display:'flex',flexDirection:'row'
                                }} onPress={()=>setRun(true)}>
                                    <Ionicons name="play-circle" size={20}
                                color={Colors.white}/>
                                <Text style={{textAlign:'center',marginLeft :5}}></Text>
                                </TouchableOpacity>
                            </View>:null}
                            {run? <View style={{marginTop :15}}>
                                <Text style={{fontWeight:'bold'}}>Output</Text>
                                <View style={{backgroundColor:colors.black,
                                padding:20,borderRadius:10,marginTop :10}}>
                                    <Text style={{color:colors.white}}>
                                        {item.output}</Text>
                                </View>
                            </View>:null}
                            <TouchableOpacity>
                            onPress={()=>onClickNext(index)}
                                style={{backgroundColor:colors.primary,
                            padding:10,borderRadius:7,position:'absolute',bottom :0,width :'110%'
                                }}
                                <Text style={{textAlign:'center',color:colors.white}}>Next</Text>
                            </TouchableOpacity>
                            
                        </View>
                    )}
                />       

        </View>
    )}
