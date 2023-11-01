import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


//create my products
const data = [
    {
        id:1,
        productname:'Hp Revolve',
        price:23000,
    },
    {
        id:2,
        productname:'Dell Latitude',
        price:67000,
    },
    {
        id:3,
        productname:'Samsung A81',
        price:23000,
    },
    {
        id:4,
        productname:'Lenovo',
        price:29000,
    },
    {
        id:5,
        productname:'MacBook Pro',
        price:300000,
    },
]

const ProductScreen = () => {
  return (
    <View style={styles.container}>
      <Text>My products</Text>

      {data.map((product)=>{
        return(
            <Text>Name:{product.productname}</Text>
        )
      })}
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    }
})