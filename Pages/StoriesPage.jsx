import { StyleSheet, Text, View, Image, ProgressBarAndroidBase, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import Videocomponent from '../Components/VideoComponent'
import Entypo from 'react-native-vector-icons/Entypo';
const StoriesPage = ({ navigation }) => {
  const [progress, setProgess] = useState(new Animated.Value(0));
  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });
  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);
    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    return () => clearTimeout(timer);
  }, [])

  const data = {
    id: "1",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    poster: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
  }
  return (
    <View style={{ height: "100%" }}>
      <Videocomponent itemurl={data.url} poster={data.poster} paused={false} />
      <View
        style={{
          backgroundColor: 'black',

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 3,
            width: '95%',
            borderWidth: 1,
            backgroundColor: 'gray',
            top: 18,
          }}>
          <Animated.View
            style={{
              height: '100%',
              backgroundColor: 'white',
              width: progressAnimation,
            }}></Animated.View>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row", height: 50, justifyContent: "space-around", marginTop: 30 }}>
      <View style={{ flex: 1, flexDirection: "row", height: 50, justifyContent:"flex-start", marginTop: 0 }}>
        <Image
          source={{ uri: "https://plus.unsplash.com/premium_photo-1664392455446-1e636959468b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D" }}
          style={{ height: 50, width: 50, margin: 10, borderRadius: 50 }} />
        <Text style={{ marginTop: 20, fontSize: 20, justifyContent: "center", marginLeft: 10, color: "white" }}>Pavan Kumar</Text>
        </View>
        <Entypo name="cross" size={30} color="white" onPress={() =>navigation.goBack() } />
      </View>
    
  </View>
  )
}

export default StoriesPage

const styles = StyleSheet.create({})