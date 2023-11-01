import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import EcommerceScreen from '../screens/EcommerceScreen'
import HomeScreen from '../screens/HomeScreen'
import LandingScreen from '../screens/LandingScreen'
import LoginScreen from '../screens/LoginScreen'
import ProductScreen from '../screens/ProductScreen'
import SignScreen from '../screens/SignScreen'
import StateScreen from '../screens/StateScreen'
import ViewProduct from '../screens/ViewProduct'


const Stack = createNativeStackNavigator ();

const Navigation = () => {
  return (
    <NavigationContainer> 
    <Stack.Navigator>
    <Stack.Screen  name="home" component={HomeScreen} options={{headerShown:false}}/>
    <Stack.Screen  name="login" component={LoginScreen} options={{headerShown:false}}/>
    <Stack.Screen  name="state" component={StateScreen} options={{headerShown:false}}/>
    <Stack.Screen  name="sign" component={SignScreen} options={{headerShown:false}}/>
    <Stack.Screen  name="landing" component={LandingScreen} options={{headerShown:false}}/>
    <Stack.Screen  name="product" component={ProductScreen} options={{headerShown:false}}/>
    <Stack.Screen  name="ecommerce" component={EcommerceScreen} options={{headerShown:false}}/>
    <Stack.Screen  name="view" component={ViewProduct} options={{headerShown:false,presentation:'modal'}}/>
    





    </Stack.Navigator>
    </NavigationContainer>


  )
}

export default Navigation

const styles = StyleSheet.create({})