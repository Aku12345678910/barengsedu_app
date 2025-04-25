import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import colors from '../Shared/colors';
import { useNavigation } from 'expo-router';

export default function CourseContent({course}) {
        const navigation=useNavigation();
    return (
        <TouchableOpacity onPress={()=>navigation.navigate('course-chapter')} style={{marginTop :10}}>
             <Text style={{fontWeight:'bold', 
            fontSize:16}}>Course Content</Text>
            <FlatList
            style={{marginTop :10}}
            data={course?.Topic}
            renderItem={({item,index})=>(
                    <View style={{display:'flex',
                    flexDirection:'row',backgroundColor:colors.white,marginBottom :10,
                    padding:13,alignItems:'center',borderRadius:5}}>
                        <Text style={{fontWeight:'bold',fontSize:20,
                            color:colors.gray,marginRight :20}}>{index+1}</Text>
                        <Text style={{fontSize:15,fontWeight:'bold'}}>
                            {item.Topic?item.Topic:item.name}</Text>
                        <Ionicons name="play-circle" size={24} 
                        style={{position:'absolute', right :10}}
                        color={colors.primary} />
                    </View>
                )}
            />
        </TouchableOpacity> 
    )
}
