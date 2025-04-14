import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'
import colors from './Shared/colors'
import { Ionicons } from '@expo/vector-icons';

export default function Login() {
    return (
        <View>
           <Image source={require('../assets/images/login.png')} />
           <View style={styles.container}>
                <Text style={styles.welcomeText}>Welcome to BarengsEdu</Text>
                <Text style={{textAlign:'center', marginTop :80, fontSize:20}}>Login/Signup</Text>
                <View style={styles.button}>
                    <Ionicons name="logo-google" size={24} color="white" style={{marginRight :10}}/>
                    <Text style={{color:colors.white}}>Sign In With Google</Text>
                </View>
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
