import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image1} source={require("../assets/icon.png")} />
      <Image style={styles.image1} source={require("../assets/favicon.png")} />
      <Text style={styles.text1}>
        Open up App.js to start working on your app!
      </Text>
      <Text style={styles.text2}> happy world</Text>
      <Text style={styles.text3}> living the dream</Text>


      {/**My button goes here */}
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('login')}>
      <Text style={styles.btntext}>Press
      <ActivityIndicator size="large" color={'gray'}/>
      </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    color: "yellow",
    paddingTop: 20,
  },
  text2: {
    color: "brown",
    fontWeight: "bold",
  },
  text3: {
     color: "red" 
    },
    image1:{
      width:80,
      height:80,
      borderRadius:50,
    },
    btn:{
      backgroundColor:"black",
      height:40,
      width:"60%",
      justifyContent:"center",
      alignItems:"center",
      borderRadius:10,
    },
    btntext:{
      color:"white",
      fontSize:18,
    }
});
