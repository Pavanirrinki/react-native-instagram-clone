import { Modal, StyleSheet, Text, TextInput, View,Pressable, ScrollView,Dimensions } from 'react-native'
import React,{useState} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Comments from './Comments';

const windowHeight = Dimensions.get('window').height;
const windowwidth = Dimensions.get('window').width;
const PostDescription = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
          <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-start", gap: 10 }}>
              <AntDesign name="hearto" size={25} color="black" />
              <Feather name="message-circle" size={25} color="black" />
              <Feather name="send" size={25} color="black" />
          </View>
          <Feather name="save" size={25} color="black" />
      </View>
      <View style={{flex: 1, flexDirection: "row", justifyContent: "flex-start", gap: 3,margin:10,fontWeight:"bold"}}>
      <Text style={{color:"black"}}>428</Text>
      <Text style={{marginLeft:10}}>Likes</Text>
      </View>
      <View style={{margin:10}}>
      <Text >Lorem ipsum dolor sit amet consectetur adipisicing elit. At
        que, quas! Ratione commodi quas veritatis fugit mollitia modi pra
        esentium dicta ex accusamus aliquid perspiciatis ab, similique aliquam iusto quam voluptatem incidunt?</Text>
        <Text style={{color:"black"}} onPress={()=>setModalVisible(true)}>View all 34 comments</Text>
        <TextInput placeholder='Add your comment...'/>
        </View>
   
        <View style={styles.centeredView}>
         
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(false);
        }}>
         <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.centeredView}>
      
          <View style={styles.modalView}>
         
          <Comments setModalVisible={setModalVisible}/>
         
             </View>
     
        </View>
        </ScrollView>  
      </Modal>
     
    </View>
      </>
  )
}

export default PostDescription

const styles = StyleSheet.create({
  centeredView: {
   flex:1,
   justifyContent:"flex-end",
  width:windowwidth,
  height:"90%",

  
  },
  modalView: {
    backgroundColor: 'white',
   alignItems: 'flex-start',
    marginTop:"50%"
 },
 
})