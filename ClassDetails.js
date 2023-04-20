import React, {useState} from 'react';
import {View,Text, StyleSheet,SafeAreaView,FlatList,Image} from 'react-native';


const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
  {
      id: '4',
      title: 'Fourth Item',
    }, {
      id: '5',
      title: 'fifth Item',
    },
];

const ClassDetails = () => {
  
  const renderItem = ({ item}) => {
    return (
        <View style={[styles.itemFl]} >
           <View >
           <Image
        style={{width:80,height:80}}
        source={{
          uri: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png',
        }}
      />
          </View>
          <View>
          <Text style={{marginVertical:5,marginHorizontal:10}}>  Id : Class001 </Text>
          <Text style={{marginVertical:5,marginHorizontal:10}}>  Name : Class01</Text>
          <Text style={{marginVertical:5,marginHorizontal:10}}>  Students : 50 </Text>
          </View>
       
        </View>
       
    );
  }

  return (
    <SafeAreaView style={{alignItems:'center'}} >
      <View style={[styles.item]} >
          <View>
          <Text style={{marginVertical:5,marginHorizontal:10}}>  Id : Class001 </Text>
          <Text style={{marginVertical:5,marginHorizontal:10}}>  Name : Class01</Text>
          <Text style={{marginVertical:5,marginHorizontal:10}}>  Students : 50 </Text>
          </View>
        <View >
          <Text styles={{marginHorizontal:20}}>#1</Text>
        </View>
        </View>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
    
  );
};



  const styles = StyleSheet.create({
    tb:{
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:40,
        marginBottom:10,
        },
    item: {
      alignItems:'center',
      justifyContent:'space-between',
        width:300,
        height:80,
        backgroundColor:'#CCCCCC',
        borderRadius:10,
        margin:8,
        flexDirection:'row',
    },
    itemFl: {
      alignItems:'center',
      justifyContent:'space-between',
        width:300,
        height:80,
       // backgroundColor:'#CCCCCC',
        borderRadius:10,
        margin:8,
        flexDirection:'row',
        borderColor:'#CCCCCC',
        borderWidth:2,
    },

});

export default ClassDetails;