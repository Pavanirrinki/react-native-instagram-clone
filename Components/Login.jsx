import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LoginActions } from '../REDUX/MiddlewareActions/MidllewareActions.jsx';
import axios from 'axios';
import { API } from '../Pages/API.jsx';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const state = useSelector((state) => (state.userreducer));

  useEffect(() => {
    fetcgdata()
  }, [dispatch])

  async function LoginHandler() {
    // await dispatch(LoginActions({
    //   email, password
    // }))

  }

  console.log(state, "stateu")
  const fetcgdata = async () => {
    if (state.user !== null) {
      await AsyncStorage.setItem("users_data", JSON.stringify(state.user))
      return navigation.navigate("HOME")
    }

  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>INSTAGRAM</Text>
      <TextInput inputMode="email" placeholder='enter your email' style={styles.input} value={email} onChangeText={(text) => setEmail(text)} />
      <TextInput inputMode="text" placeholder='enter your password' style={styles.input} value={password} onChangeText={(text) => setPassword(text)} />
      <View style={styles.button}  >
        <Button
          onPress={LoginHandler}
          title="LoG IN"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <Text style={styles.Signup_page}>Don't have an account ? <Text style={{ color: "#00BFFF" }} onPress={() => navigation.navigate('SIGNUP')}>Sign Up </Text></Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 25,
    fontWeight: "900",
    marginBottom: 10
  },
  input: {
    height: 40,
    backgroundColor: '#ffffff',
    width: "80%",
    textAlign: "center",
    borderRadius: 40,
    marginBottom: 20
  },
  button: {
    width: "80%",
  },
  Signup_page: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold"
  }
})