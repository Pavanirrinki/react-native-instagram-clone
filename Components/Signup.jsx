import { StyleSheet, Text, View,TextInput,Button } from 'react-native'
import React,{useState,useEffect} from 'react'

const Signup = ({navigation}) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [username,setUsername] = useState('');
  const [mobile,setMobile] = useState('');
  function SignupHandler(){
    console.log(email,password,mobile,username);
    setEmail('');
    setPassword("");
    setUsername("");
    setMobile("")
  }
  return (
    <View style={styles.container}>
    <Text style={styles.text}>INSTAGRAM</Text>
    <TextInput inputMode="text" placeholder='enter your user_name' style={styles.input} value={username} onChangeText={(text)=>setUsername(text)}/>
    <TextInput inputMode="email" placeholder='enter your email' style={styles.input} value={email} onChangeText={(text)=>setEmail(text)}/>
    <TextInput  inputMode="tel" placeholder='enter your mobile' style={styles.input} value={mobile} onChangeText={(text)=>setMobile(text)}/>
    <TextInput  inputMode="text" secureTextEntry={true} placeholder='enter your password' style={styles.input} value={password} onChangeText={(text)=>setPassword(text)}/>
    <View style ={styles.button}>
    <Button
    onPress={SignupHandler}
   title="Sign UP"
color="#841584"
accessibilityLabel="Learn more about this purple button"
/>
</View> 
<Text style={styles.Signup_page}>If you have account ? <Text style={{color:"#00BFFF"}} onPress={() => navigation.navigate('LOGIN')}>LOG IN </Text></Text>
</View>
  )
}

export default Signup

const styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"
    },
    text:{
      fontSize:25,
      fontWeight:"900",
      marginBottom:10
    },
    input:{
      height: 40,
      backgroundColor: '#ffffff',
     width:"80%",
     textAlign:"center",
     borderRadius:40,
     marginBottom:20
    },
    button:{
      width:"80%",
    },
    Signup_page:{
  marginTop:10,
  fontSize:20,
  fontWeight:"bold"
    }
  })