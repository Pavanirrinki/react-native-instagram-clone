import { StyleSheet, Text, View,Image,Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { data } from '../android/app/src/DATA/Data'
const windowHeight = Dimensions.get('window').height;
const windowwidth = Dimensions.get('window').width;
const Posts = () => {
  return (
    <ScrollView>
    <View style={{flex:1,flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around"}}>
      {data?.map((data,index)=>{
        return(
          <View key={index}>
            <Image source={{uri:data.poster}} style={{height:windowHeight*0.3,width:windowwidth*0.27,margin:10}}/>
         </View>
        )
      })}
    </View>
    </ScrollView>
  )
}

export default Posts

const styles = StyleSheet.create({})