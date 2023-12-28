import Video from 'react-native-video';
import React, { useState } from 'react';
import { StyleSheet,Text, TouchableOpacity, View } from 'react-native';

const Videocomponent= ({itemurl,paused,poster}) => {
    const videoPlayer = React.useRef();
   
 return (
        
   
         <Video
            ref={ref => (videoPlayer.current = ref)}
            source={{ uri:itemurl}}
            paused={paused}
            style={styles.backgroundVideo}
            repeat={true} 
            fullscreen={true}
            poster={poster}
            posterResizeMode={'cover'}
            resizeMode ="cover"/>
         
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