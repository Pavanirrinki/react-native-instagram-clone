import React,{useState,useRef} from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, TouchableWithoutFeedback, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Vector from 'react-native-vector-icons/MaterialIcons';
import VideoComponent from '../Components/VideoComponent';
import { data } from '../android/app/src/DATA/Data';
import { Image } from 'react-native-elements';
import PostDescription from '../Components/PostDescription';
import Stories from '../Components/Stories';

const { height: screenHeight } = Dimensions.get('window');
const videoComponentHeight = screenHeight / 2;

export default function App( {navigation}) {
  const flatListRef = useRef(null);
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(-1);
  
  const onViewableItemsChanged = ({ viewableItems }) => {
    // console.log("viewable items",viewableItems)
    if (viewableItems.length > 0) {
      const index = viewableItems[0].index;
      if (index !== currentPlayingIndex) {
        // Pause the previously playing video
        setCurrentPlayingIndex(index);
      }
    }
  };
  
  const renderVideoItem = ({ item,index }) => (
   
   <><View style={{ height: videoComponentHeight, padding: 0, margin: 8, backgroundColor: "pink" }} key={item.id}>
      <VideoComponent itemurl={item.url} paused={index !== currentPlayingIndex} poster={item.poster} index={item.length} />
      <View style={{ flex: 1, flexDirection: "row", height: 50, alignItems: "flex-start" }}>
        <Image
          source={{ uri: "https://plus.unsplash.com/premium_photo-1664392455446-1e636959468b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D" }}
          style={{ height: 50, width: 50, margin: 10, borderRadius: 50 }} />
        <Text style={{ marginTop: 20, fontSize: 20, justifyContent: "center", marginLeft: 10, color: "white" }}>Pavan Kumar</Text>
      </View>
    </View>
    <PostDescription/>
    </>
   
  
  );

  return (
    <>
      <View style={styles.container}>
        <Icon name="plus-square-o" size={30} color="black" />
        <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Instagram</Text>
        <View style={{ flexDirection: 'row' }}>
          <Vector name="brightness-6" size={30} color="black" />
          <Vector name="message" size={30} color="black" />
        </View>
      </View>
      
      <Stories />
    
      <FlatList
      ref={flatListRef}
        style={{ padding: 0, marginBottom: 50 }}
        initialNumToRender={4}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderVideoItem}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }} 
  />

      <View style={styles.below}>
        <Icon name="home" size={30} color="black" />
        <Vector name="search" size={30} color="black" />
        <Vector name="video-library" size={30} color="black" />
        <Icon name="heart-o" size={30} color="black" />
        <Icon name="product-hunt" size={30} color="black"  onPress={() => navigation.navigate('PROFILE')}/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1000,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
  },
  below: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: 'white',
    bottom: 0,
    left: 0,
    right: 0,
    padding:15,
   
  },
});
