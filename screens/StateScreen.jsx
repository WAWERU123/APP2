import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';

const StateScreen = ({navigation}) => {
    const [name,setName] = useState("Brian");
    const [productnum,setProductnum] = useState(0);

    //create an incerement function
    const increase = () =>{
        setProductnum(productnum+1);

    }

    const decrease = () =>{
        setProductnum(productnum-1);

    }


    const changeName = () =>{
        setName("Cate");

    }
  return (
    <SafeAreaView style={styles.container}>
    <Text>{name}'s cart</Text>
      <Text>No. of Items:{productnum}</Text>
      {/**My button goes here */}
      <TouchableOpacity style={styles.btn} onPress={increase}>
      <Text style={styles.btntext}>Add
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={decrease}>
      <Text style={styles.btntext}>Remove
      
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={changeName}>
      <Text style={styles.btntext}>Change Name
      
      </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default StateScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    btn:{
        backgroundColor:"black",
        height:40,
        width:"60%",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        marginVertical:15,
  
  
  
      },
      btntext:{
        color:"white",
        fontSize:18,
      }
})