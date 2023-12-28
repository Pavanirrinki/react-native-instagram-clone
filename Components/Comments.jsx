import { StyleSheet, Text, View, Image,  TextInput, Dimensions } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
const windowwidth = Dimensions.get('window').width;
const Comments = ({ setModalVisible }) => {

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  return (

    <View>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", width: windowwidth }}>
        <Text style={styles.heading}>Comments</Text>
        <Entypo name="cross" size={30} color="black" onPress={() => setModalVisible(false)} />
      </View>
      {data?.map((data, index) => {
        return (
          <React.Fragment key={data}>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", marginTop: 10, width: windowwidth }}>

              <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-start" }}>
                <Image source={{ uri: "https://plus.unsplash.com/premium_photo-1664392455446-1e636959468b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D" }}
                  style={{ height: 50, width: 50, margin: 10, borderRadius: 50 }} />
                <View>
                  <Text style={{ marginTop: 5, fontSize: 20 }}>Pavan Kumar</Text>
                  <Text style={{ width: windowwidth*0.8}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores, fuga dolorum omnis consequatur cupiditate quod nam porro ea distinctio accusamus quas i
                    usto molestias, adipisci voluptate, nobis eligendi consectetur iste hic.</Text>
                  <TextInput placeholder='Add your Reply...' style={styles.inputreply} />
                </View>
              </View>

      
              <View >
<Entypo name="heart-outlined" size={15} color="black" />
<Text>1</Text>
</View>
            </View>



            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", marginTop: 10, width: windowwidth }}>

<View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-start" ,marginStart:60}}>
  <Image source={{ uri: "https://plus.unsplash.com/premium_photo-1664392455446-1e636959468b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D" }}
    style={{ height: 30, width: 30, margin: 10, borderRadius: 50 }} />
  <View>
    <Text style={{ marginTop: 5, fontSize: 15 }}>Pavan Kumar</Text>
    <Text style={{ width: windowwidth*0.6,fontSize: 10}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Dolores, fuga dolorum omnis consequatur cupiditate quod nam porro ea distinctio accusamus quas i
      usto molestias, adipisci voluptate, nobis eligendi consectetur iste hic.</Text>
    <TextInput placeholder='Add your Reply...' style={styles.inputreply} />
  </View>
</View>
<View >
<Entypo name="heart-outlined" size={15} color="black" />
<Text>1</Text>
</View>
</View>

          </React.Fragment>

        )
      })}



    </View>

  )
}

export default Comments
const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    margin: 0,
  },
  inputreply: {
    borderBottomWidth: 0.5,
    width: "90%",
    borderStyle: "dashed"
  }
})