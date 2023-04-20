import React, { useState, useEffect } from 'react';
import {Text, StyleSheet, View,FlatList, TouchableOpacity, Button} from 'react-native';

import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase('class.db');

const Classes = ({navigation}) => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS constants (id INTEGER PRIMARY KEY AUTOINCREMENT, idname TEXT, name TEXT, quantity INTEGER);'
      );
      tx.executeSql('INSERT INTO constants (idclass, nameclass, quantity) VALUES (?, ?, ?)', ['Class1', 'Class001', 10]);
      tx.executeSql('INSERT INTO constants (idclass, nameclass, quantity) VALUES (?, ?, ?)', ['Class2', 'Class002', 10]);
      tx.executeSql('INSERT INTO constants (idclass, nameclass, quantity) VALUES (?, ?, ?)', ['Class3', 'Class003', 10]);
      tx.executeSql('INSERT INTO constants (idclass, nameclass, quantity) VALUES (?, ?, ?)', ['Class4', 'Class004', 10]);
      tx.executeSql('INSERT INTO constants (idclass, nameclass, quantity) VALUES (?, ?, ?)', ['Class5', 'Class005', 10]);

      tx.executeSql('SELECT * FROM constants', [], (_, { rows }) =>
        setData(rows._array)
      );
    });
  }, []);

  function Pressed(){
    navigation.navigate('Class Details', {})
  }

  function Press(){
    console.log(data)
  }

  

    const renderItem = ({ item}) => {
        return (
          <TouchableOpacity  onPress={Pressed} >
            <View style={[styles.itemFl]} >
              <View>
              <Text style={{marginVertical:5,marginHorizontal:10}}>  Id : Class001 </Text>
              <Text style={{marginVertical:5,marginHorizontal:10}}>  Name : Class01</Text>
              <Text style={{marginVertical:5,marginHorizontal:10}}>  Students : 50 </Text>
              </View>
            <View >
              <Text styles={{marginHorizontal:20}}>#1</Text>
            </View>
            </View>
          </TouchableOpacity>
        );
      }

  return (
    
    <View  style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Button title='mm' onPress={Press} >
      
      </Button>
    <Text style={[styles.tb]}>
      Classes
    </Text>
    <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
    
  );
};

const styles = StyleSheet.create({
    tb:{
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:40,
        marginBottom:10,
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

export default Classes;