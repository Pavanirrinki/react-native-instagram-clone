import { StyleSheet, onPress, View, Button,Image,Dimensions,TextInput } from 'react-native';
import React, { useState, useCallback } from 'react';
import DocumentPicker from 'react-native-document-picker';
import { Text } from 'react-native-elements';
import Videocomponent from './VideoComponent';

const UploadPost = () => {
  const windowwidth = Dimensions.get('window').height;
  const [fileResponse, setFileResponse] = useState('');
  const [uploading,setUploading] = useState(false)
  const [description,setDescription] = useState('')
const handleDocumentSelection = useCallback(async () => {
  try {
    setUploading(true)
    const response = await DocumentPicker.pick({
      type: [DocumentPicker.types.video, DocumentPicker.types.images],
      presentationStyle: 'fullScreen',
    });

  
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
          setFileResponse(data.url);
          setUploading(false)
        })
        .catch((err) => {
          setUploading(false)
          console.error('Fetch error:', err.message);
        });
    } else {
      setUploading(false)
      console.error('File URI is undefined. Response:', response);
    }
  } catch (err) {
    setUploading(false)
    console.log(err,'error mesaage');
  }
}, []);

const uploadPost=()=>{

}


  console.log("file response", fileResponse);

  return (
    <>
    {fileResponse == "" ?
    <View style={styles.button}>
      <Button title={!uploading ? "Select Post":"uploading...."} onPress={handleDocumentSelection} />
    </View>:
    <View style={{flex:1}}>
     {!fileResponse.includes(".mp4")? <Image source = {{uri:fileResponse}}
   style={{ height:windowwidth*0.7,resizeMode: 'contain',marginTop:20 }}
   />:<View style={{height:windowwidth*0.8,marginTop:20}}>
   <Videocomponent itemurl={fileResponse} />
   <Text>pav</Text>
   </View>} 
    <TextInput
        style={{height: 40, margin: 15,borderWidth: 1,padding: 10}}
        onChangeText={(text)=>setDescription(text)}
       placeholder="Add Description......."
       />
       <View style={{ justifyContent: 'center', marginHorizontal: 16}}>
       <Button title="post" onPress={uploadPost}/>
       </View>
      </View>}
    </>
  );
};

export default UploadPost;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
