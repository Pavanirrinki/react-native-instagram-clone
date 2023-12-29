import { StyleSheet, Text, View,Image,Dimensions } from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Posts from './Posts';

const windowwidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;
const Profile = () => {
  const [id,setId] = useState(1)
  return (
    <><View style={{ height: windowheight, width: windowwidth }}>
      <Text style={{ fontSize: 20, color: "black", fontWeight: "900", margin: 10 }}>Pavan_irrinki01</Text>
      <View style={styles.container}>
       
        <Image
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1664392455446-1e636959468b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D',
          }}
          style={{
            height: 70,
            width: 70,
            borderRadius: 100,
            backgroundColor: 'orange',
          }} />
          
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 30 }}>4</Text>
          <Text>POSTS</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 30 }}>48888</Text>
          <Text>FOLLOWERS</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 30 }}>48888</Text>
          <Text>FOLLOWING</Text>
        </View>
        </View>
        <View style={styles.text}>
<Text>pavan kumar is a word fmousn kvjkfvdjnvjkn mdvdfnvfdkkkkkkkkkkkk</Text>
<Text>BIO:-pavan kumar is a word fmousn kvjkfvdjnvjkn mdvdfnvfdkkkkkkkkkkkk</Text>
</View>
      <View style={{ flexDirection: "row", justifyContent: "space-around", marginBottom: 30 }}>
        <MaterialCommunityIcons name="grid" size={30} style={{ color: id === 1 ? 'blue' : 'grey' }} onPress={() => setId(1)} />
        <FontAwesome5 name="user-tag" size={30} onPress={() => setId(2)} style={{ color: id === 2 ? 'blue' : 'grey' }} />
      </View>
      <Posts />
    </View>
    </>
  )
}

export default Profile

const styles = StyleSheet.create({container: {
    zIndex: 1000,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop:50,
 
  },
  text:{
    marginBottom:50,
    marginHorizontal:15,
    width:"50%"
  }
})