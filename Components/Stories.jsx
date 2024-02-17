import { StyleSheet, Text, View,Image, TouchableOpacity,Dimensions,FlatList} from 'react-native'
import React from 'react';
import DocumentPicker from 'react-native-document-picker';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import { API } from '../Pages/API';
import { useDispatch, useSelector } from 'react-redux';
import { userDetailsActions } from '../REDUX/MiddlewareActions/MidllewareActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
const datalist = [1,2,3,4,5]
const Stories = ({navigation}) => {

  const windowwidth = Dimensions.get('window').height;
 

  const dispatch = useDispatch();
  const state = useSelector((state) => state.userreducer);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          const userdata = await AsyncStorage.getItem("users_data");
          const userparsed = JSON.parse(userdata);
          await dispatch(userDetailsActions(userparsed?.userdetails?._id));
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
  
      fetchData();
  
      return () => {
        fetchData()
      };
    }, [])
  );

  console.log(state?.user?.userdetails?.following,'poijl')

  const HANDLESTORYSUBMIT=  async() => {
    try {
   
      const response = await DocumentPicker.pick({
        type: [DocumentPicker.types.video, DocumentPicker.types.images],
        presentationStyle: 'fullScreen',
      });
  console.log("pppppppppppppppppppppppppp",response[0].uri,response[0].type,response[0].name)
  const data = new FormData();
  if (response[0]?.uri) {
    data.append("file", {
      uri: response[0].uri, 
      type: response[0].type,
      name: response[0].name,
    });

    data.append("upload_preset", "insta-clone");
    data.append("cloud_name", "cdvbvggl5f");

    fetch("https://api.cloudinary.com/v1_1/dvbvggl5f/upload", {
      method: "post",
      body: data,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data.url,"data.url");
    axios.post(API+`upload_story/658feeb685b3cd18dc568fea`,{stories:data.url}).then((data)=>console.log(data.data,"datatatat")).
    catch((error)=>console.log(error.message))
      })
      .catch((err) => {
   
        console.error('Fetch error:', err.message);
      });
  } else {
   
    console.error('File URI is undefined. Response:', response);
  } 
    
    }
     catch (err) {
      
      console.log(err,'error mesaage');
    }
  };
  

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }} >
      <TouchableOpacity onPress={HANDLESTORYSUBMIT}>
   <View style={styles.circleContainer} >
  <Image
    source={{
      uri: 'https://plus.unsplash.com/premium_photo-1664392455446-1e636959468b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D',
    }}
    style={styles.circleImage}
  />
  <Entypo 
    name="circle-with-plus"
    style={{
      position: 'absolute',
      top: 0,
      right: 0,
      fontSize: 18,
      color: '#405de6',
      backgroundColor: 'white',
      borderRadius: 100,
      padding: 5,
    }}
  />
  <Text style={styles.text}>{ "Your Story"}</Text>
</View>
</TouchableOpacity>
  
    <FlatList
     horizontal
     scrollEnabled={state?.user?.userdetails?.following?.length>10}
    
      data={state?.user?.userdetails?.following}
      renderItem={({ item: userData }) => (
        <FlatList
      
          data={userData.stories || []}
          keyExtractor={(story, index) => index.toString()}
          renderItem={({ item: story }) => (
            <TouchableOpacity style={styles.circleContainer} onPress={()=>navigation.navigate("STORIES",{userId:userData?._id})}>
              <Image
                source={{
                  uri: 'https://plus.unsplash.com/premium_photo-1664392455446-1e636959468b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D',
                }}
                style={styles.circleImage}
              />
              <Text style={styles.text}>{userData?.username}</Text>
            </TouchableOpacity>
          )}
        />
      )}
      keyExtractor={(userData, index) => index.toString()}
    /> 

     
 
  </View>
  

  )
}

export default Stories

const styles = StyleSheet.create({
  circleContainer: {
    paddingHorizontal: 8,
    marginRight: 8,
    width: 68,
    height: 110,
    alignItems: 'center',
   margin:2,
   
    borderRadius: 100,
  },
  circleImage: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderColor: '#c13584',
    borderWidth: 1.8,
    
  },
  text: {
    textAlign: 'center',
    fontSize: 10,
    color: "black",
    opacity:  0.5,
  },
});
