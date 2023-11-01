import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const EcommerceScreen = ({navigation}) => {
  const [product, setProduct] = useState([]);
  //Fetch data function//
  useEffect(() => {
    FetchProduct();
  }, []);

  //fetch products function[]
  const FetchProduct = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProduct(response.data);
      console.log("my products:", product);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 15 }}>
      <ScrollView vertical={true}>
        <Text style={{marginBottom:30}}>EcommerceScreen</Text>
        <View style={styles.productcontainer}>
          {product.map((item) => {
            return (
              <View style={styles.pcard}>
                <Image
                  source={{ uri: item.image }}
                  style={{ height: 100, width: 100 }}
                />
                <Text>{item.title}</Text>
                <Text>{item.id}</Text>

                <Text>{item.price}</Text>
                <Text>Rating:{item.rating.rate}</Text>
                <TouchableOpacity style={styles.button}
                 onPress={()=>navigation.navigate('view',{
                  pName:item.title,
                  pImage:item.image,
                  pPrice:item.price,
                  Prate:item.rating.rate

                 })}
                 
                 >
                <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>View</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default EcommerceScreen;

const styles = StyleSheet.create({
  productcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  pcard: {
    width: "45%",
    height: 250,
    marginBottom: 10,
    backgroundColor: "#ccc",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  button:{
    height:30,
    width:'40%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black',
    borderRadius:9,
  }
});
