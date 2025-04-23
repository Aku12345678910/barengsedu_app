import { StyleSheet, View, Text, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../Shared/colors'
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google'

export default function Login() {
        WebBrowser.maybeCompleteAuthSession();
        const [accessToken,setAccesToken]=useState();
        const [userinfo,setUserInfo]=useState();

        const [request, response, promptAsync] = Google.useAuthRequest({
            androidClientId: '648261850548-mq6ijc72th661m6kq3e7sn5q1l881bb2.apps.googleusercontent.com',
            expoClientId:'648261850548-ggeni2nlv29udj5stg8bsl17lec9600r.apps.googleusercontent.com'
        });

        useEffect(()=>{
            if(response?.type=='success')
            {
                setAccesToken(response.authentication.accessToken);
             
                getUserData();
            }
        },[response]);
        const getUserData=async()=>{
            try{
                const response = await fetch(
                    "https://www.googleapis.com/userinfo/v2/me",
                    {
                        headers: {Authorization: 'Bearer ${accessToken}' },
                    }
                );
                const user = await response.json();
                console.log("user Details",user)
                setUserInfo(user);
            } catch (error) {
                //add your own
            }
        }
    return (
        <View>
           <Image source={require('../assets/images/login.png')} />
           <View style={styles.container}>
                <Text style={styles.welcomeText}>Welcome to BarengsEdu</Text>
                <Text style={{textAlign:'center', marginTop :80, fontSize:20}}>Login/Signup</Text>
                <TouchableOpacity style={styles.button} 
                onPress={()=>promptAsync()}>
                    <Ionicons name="logo-google" size={24} color="white" style={{marginRight :10}}/>
                    <Text style={{color:colors.white}}>Sign In With Google</Text>
                </TouchableOpacity>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop : 40,
        marginTop : -25,
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    },
    welcomeText:{
        fontSize: 35, 
        textAlign: 'center', 
        fontWeight: 'bold'
    },
    button:{
        backgroundColor: colors.primary,
        padding: 30,
        margin: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 
        borderRadius: 10
    }
});
