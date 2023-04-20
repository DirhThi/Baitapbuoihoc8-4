import React, {useState} from 'react';
import {Text, StyleSheet,View,TextInput,TouchableHighlight,} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Login = ({navigation}) => {
    function loginCheck(){
        navigation.navigate('Classes', {})
      }

  return (
    <View  style={[styles.container]}>
    <Text style={[styles.tbLogin]}>
      LOGIN
    </Text>
    <Text >
      User Name
      </Text>
    <TextInput  style={[styles.textip]} /*</View>onChangeText={(text)=>setUserName(text)} value={UserName}  */ >

    </TextInput>
    <Text>
      Password
    </Text>
    <TextInput secureTextEntry={true} style={[styles.textip]} /*onChangeText={(text)=>setPassword(text)} value={Password}*/>

    </TextInput>
   
    <TouchableHighlight style={[styles.btn]}  onPress={loginCheck} >
      <Text>
        Login
      </Text>
    </TouchableHighlight>
    
  </View>
);
}



const styles=StyleSheet.create({
container:{

height:'100%',
justifyContent:'start',
paddingLeft:40,
paddingRight:40,
flexDirection:'column',
},
textip:{
backgroundColor:'#d9d9d9',
borderRadius:10,
marginTop:0,
marginBottom:40,
minWidth:300,
height:40,
},
tbLogin:{
alignSelf:'center',
fontWeight:'bold',
fontSize:40,
marginBottom:40,
},
btn:{
justifyContent:'center',
alignItems:'center',
alignSelf:'center',
backgroundColor:'#d9d9d9',
width:100,
height:40,
marginTop:20,
borderRadius:10,
}
})

export default Login;