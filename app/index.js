import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./pages/login";
import { AuthContext } from "./context/AuthContext";
import { useEffect, useState } from "react";
import services from "./Shared/services";
import Home from "./pages/home";

export default function Index() {

    const[userData,setUserData]=useState();
    useEffect(()=>{
        services.getUserAuth().then(resp=>{
            console.log(resp);
            if(resp)
            {
                setUserData(resp)
            }
            else{
                setUserData(null)
            }
        })
    },[]) 
    return (
        <View>
            <AuthContext.Provider 
            value={{userData,setUserData}}>
            {userData?<Home/>:<Login/>}
            
            </AuthContext.Provider>
       
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})