import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.log}>LoginScreen</Text>
      <TextInput placeholder="email" style={styles.input} />
      <TextInput placeholder="password " secureTextEntry style={styles.input} />

      <View style={styles.btncontainer}>
        <TouchableOpacity
          style={styles.btnlogin}
          onPress={() => navigation.navigate("state")}
        >
          <Text style={styles.sign}>signup </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnregister}
          onPress={() => navigation.navigate("landing")}
        >
          <Text style={styles.sign}>login </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnregister}
          onPress={() => navigation.navigate("product")}
        >
          <Text style={styles.sign}>ProductScreen</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnregister}
          onPress={() => navigation.navigate("ecommerce")}
        >
          <Text style={styles.sign}>Ecommerce</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  log: {
    color: "maroon",
    fontSize: 29,
  },
  input: {
    height: 40,
    width: "70%",
    borderColor: "#ccc",
    borderWidth: 0.6,
    paddingHorizontal: 10,
    marginVertical: 15,
    borderRadius: 9,
  },
  btnlogin: {
    height: 40,
    backgroundColor: "yellow",
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    borderRadius: 9,
  },
  btnregister: {
    height: 40,
    backgroundColor: "green",
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    borderRadius: 9,
  },
  btncontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "60%",
  },
});
