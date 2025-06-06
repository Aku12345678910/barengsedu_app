import { useContext } from "react";
import { View, Text } from "react-native";
import { readConfigFile } from "typescript";
import { AuthContext } from "../context/AuthContext";

export default function WelcomeHeader (){
        const {userData,setUserData}=useContext(AuthContext)
    return (
        <View style={styles.container}>
            <View>
                <Text>Hello,</Text>
                <Text style={{fontSize:20,fontWeight:'bold'}}>{userData?.name}</Text>
            </View>
            <Image source={{uri:userData?.picture}}
            style={{width :40,height :40,borderRadius:100}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
        container:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        }
})