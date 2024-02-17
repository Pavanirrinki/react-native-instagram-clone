import Video from 'react-native-video';
import React, { useState } from 'react';
import { StyleSheet,Text, TouchableOpacity, View } from 'react-native';
import VideoPlayer from 'react-native-video-controls';
const Videocomponent= ({itemurl,paused,poster}) => {
    const videoPlayer = React.useRef();
  console.log("itemurl",itemurl)
 return (
    <>
  
    <VideoPlayer
         ref={ref => (videoPlayer.current = ref)}
         source={{ uri: itemurl }}
         paused={paused}
         style={styles.backgroundVideo}
         repeat={true}
         poster={poster}
         posterResizeMode={'cover'}
         resizeMode="cover"
         disableVolume={true}
         disableFullscreen={true}
         disableBack={true}
         autoplay={false} />

</>

       
    )
}
export default Videocomponent


const styles = StyleSheet.create({

    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
   
  })