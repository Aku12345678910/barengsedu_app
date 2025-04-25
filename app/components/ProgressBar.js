import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progrees';

export default function ProgressBar() {
    return (
        <View>
            <Progress.Bar progress={0.4} 
            width={Dimensions.get('screen').width*0.85} />
        </View>
    )
}