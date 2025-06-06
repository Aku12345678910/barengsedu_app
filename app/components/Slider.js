import { View, Text, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native-web';

export default function Slider(){
    const [slider,setSlider]=useState([])
    useEffect(()=>{
        getSlider();
    },[])

    const  getSlider=async()=>{
        const result=(await GlobalApi.getSlider()).data;
        
        const resp=result.data.map((item)=>({
            id:item.id,
            name:item.attributes.name,
            image:item.attributes.image.data.attributes.url
        }))
        
        setSlider(resp)
    }
    return (
        <View style={{marginTop :10}}>
            <FlatList
                data={slider}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                key={slider.id}
                renderItem={({item})=>(
                    <View>
                        <Image source={{uri:item.image}} 
                            style={{width :Dimensions.get('screen').width*0.87
                                ,height :150,borderRadius:10,marginRight :15}}
                        />
                    </View>
                )}
            />
        </View>
    )
}

