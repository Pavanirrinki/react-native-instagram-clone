import React, { useEffect, useState } from 'react';
import { View, Animated, Text, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import Videocomponent from '../Components/VideoComponent';
import { userDetailsActions } from '../REDUX/MiddlewareActions/MidllewareActions';
import axios from 'axios';
import { API } from './API';
// Import actions from userreducer file


// Assuming you have defined Videocomponent elsewhere

const StoriesPage = ({ navigation }) => {
  const [videUrl,setVideoUrl] = useState(null)
  const dispatch = useDispatch();
   const state = useSelector((state) => state.userreducer);
  const route = useRoute();
  const { userId } = route.params;

 

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.get(API+`user_details/${userId}`).then((user)=>
        setVideoUrl(user.data?.userdetails?.stories[0]?.stories)).catch((error)=>console.log("error",error.message))
        // await dispatch(userDetailsActions(userId));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [userId]);


  const data = {
    id: "1",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    poster: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
  };
 
  console.log(videUrl,'videourl')

  return (
    <View style={{ height: "100%" }}>
   
      {/* Assuming Videocomponent is defined and used correctly */}
      {/* {state?.user?.userdetails?.stories?.map((video,index)=>{
        return( */}
            
      {videUrl?.includes(".mp4") ? 
      <Videocomponent itemurl={videUrl} poster={data.poster} paused={false} />:
       <Image
      source={{ uri: "https://plus.unsplash.com/premium_photo-1664392455446-1e636959468b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D" }}
      style={{ flex: 1, backgroundColor: 'black' }} // Adjust styling as needed
    />}
   <View style={{ backgroundColor: 'black', justifyContent: 'center', alignItems: 'center',display:"flex"}}>
        
        </View><View style={{ flex: 1, flexDirection: "row", height: 50, justifyContent: "space-around", marginTop: 30 }}>
            <View style={{ flex: 1, flexDirection: "row", height: 50, justifyContent: "flex-start", marginTop: 0 }}>
              <Image
                source={{ uri: "https://plus.unsplash.com/premium_photo-1664392455446-1e636959468b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D" }}
                style={{ height: 50, width: 50, margin: 10, borderRadius: 50 }} />
              <Text style={{ marginTop: 20, fontSize: 20, justifyContent: "center", marginLeft: 10, color: "white" }}>Pavan Kumar</Text>
            </View>
            <Entypo name="cross" size={30} color="white" onPress={() => navigation.navigate("HOME")} />
          </View>
     
    </View>
  );
}

export default StoriesPage;
