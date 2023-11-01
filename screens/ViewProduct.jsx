import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const ViewProduct = ({ navigation, route }) => {
  const { pName, pImage, pPrice, Prate } = route.params;
  return (
    <SafeAreaView style={styles.container}>
   
      <Image
        source={{ uri: pImage }}
        style={{ position: "relative", width: "100%", height: "50%", top: 0 }}
      />
     
      <View style={styles.br}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "black",
            marginTop: "10%",
          }}
        >
          {pName}
        </Text>
        <Text style={{ fontWeight: "900", color: "green" }}>{pPrice}</Text>
        <Text style={{ color: "maroon", justifyContent: "center",fontSize:"10" }}>
          {Prate}
        </Text>
      
      </View>
    </SafeAreaView>
  );
};

export default ViewProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  br: {
    justifyContent: "center",
    marginTop: "10%",
    alignItems: "center",
  },
});
