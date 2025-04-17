import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./pages/login";
import { AuthContext } from "./context/AuthContext";
import { useEffect, useState } from "react";

export default function Index() {

    const[userData,setUserData]=useState();
    useEffect(()=>{
        
    },[])
    return (
        <View>
            <AuthContext.Provider value={{userData,setUserData}}>
            {userData?<home/>:<login/>}
            
            </AuthContext.Provider>
       
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})