import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Icons from "react-native-heroicons/solid";

const LandingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headertext}>
          <Text style={styles.hi}>hi designer</Text>
          <Text style={styles.wel}>welcome back </Text>
        </View>

        <TouchableOpacity style={styles.menucontainer}>
          <Icons.Bars3Icon size={25} color={"black"} />
        </TouchableOpacity>
      </View>

      {/**search input here */}

      <View style={styles.searchcontainer}>
        <Icons.MagnifyingGlassCircleIcon style={styles.search} size={20} />
        <TextInput placeholder="search" style={styles.input} />
      </View>
      {/**end of search */}
{/**vertical scrollview starts */}
<ScrollView vertical>
      {/**card with horizontal scrollview */}
      <View style={styles.cardcontainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.card1}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 30,
                marginBottom: 20,
              }}
            >
              <Text style={styles.cardtext}>Hello</Text>
              <Icons.ArrowRightIcon size={20} color={"white"} />
            </View>
          </View>
          <View style={styles.card2}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 30,
                marginBottom: 20,
              }}
            >
              <Text style={styles.cardtext}>Hello</Text>
              <Icons.ArrowRightIcon size={20} color={"white"} />
            </View>
          </View>
          <View style={styles.card1}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 30,
                marginBottom: 20,
              }}
            >
              <Text style={styles.cardtext}>Hello</Text>
              <Icons.ArrowRightIcon size={20} color={"white"} />
            </View>
          </View>
        </ScrollView>
      </View>

      {/**hor scroll view ends here */}

      {/**recent items styart here */}

      <View style={styles.recents}>
        <View>
          <Text style={styles.recenttext}>Recent expenses</Text>
        </View>
        <View>
          <Text style={styles.recenttext}>$115</Text>
        </View>
      </View>

      <View
        style={{ paddingHorizontal: 15, alignItems: "center", marginTop: "5%" }}
      >
        <View style={styles.recentitems1}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <Image
                source={require("../assets/icon.png")}
                style={{ width: 60, height: 60, borderRadius: 50 }}
              />
            </View>
            <View style={{ paddingHorizontal: 15 }}>
              <Text
                style={{ fontSize: 15, fontWeight: "bold", color: "white" }}
              >
                Game
              </Text>
              <Text style={{ color: "white" }}>Game</Text>
            </View>
          </View>

          <View>
            <Text style={{ fontSize: 15, color: "white" }}>$12</Text>
          </View>
        </View>

        <View style={styles.recentitems2}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <Image
                source={require("../assets/icon.png")}
                style={{ width: 60, height: 60, borderRadius: 50 }}
              />
            </View>
            <View style={{ paddingHorizontal: 15 }}>
              <Text
                style={{ fontSize: 15, fontWeight: "bold", color: "white" }}
              >
                Game
              </Text>
              <Text style={{ color: "white" }}>Game</Text>
            </View>
          </View>

          <View style={styles.toggle}>
            <View style={styles.button}>
              <Text style={{ fontSize: 15, color: "white" }}>$99</Text>
            </View>
            <View style={{ paddingHorizontal: 5 }}>
              <Icons.ArrowRightIcon size={20} color={"white"} />
            </View>
          </View>
        </View>

        <View style={styles.recentitems1}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <Image
                source={require("../assets/icon.png")}
                style={{ width: 60, height: 60, borderRadius: 50 }}
              />
            </View>
            <View style={{ paddingHorizontal: 15 }}>
              <Text
                style={{ fontSize: 15, fontWeight: "bold", color: "white" }}
              >
                Fries
              </Text>
              <Text style={{ color: "white" }}>junkfood</Text>
            </View>
          </View>

          <View>
            <Text style={{ fontSize: 15, color: "white" }}>$30</Text>
          </View>
        </View>

        <View style={styles.recentitems1}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <Image
                source={require("../assets/icon.png")}
                style={{ width: 60, height: 60, borderRadius: 50 }}
              />
            </View>
            <View style={{ paddingHorizontal: 15 }}>
              <Text
                style={{ fontSize: 15, fontWeight: "bold", color: "white" }}
              >
                Fries
              </Text>
              <Text style={{ color: "white" }}>junkfood</Text>
            </View>
          </View>

          <View>
            <Text style={{ fontSize: 15, color: "white" }}>$30</Text>
          </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1D24",
  },

  hi: {
    color: "lightgreen",
    fontWeight: "bold",
    fontSize: 20,
  },
  wel: {
    fontSize: 33,
    fontWeight: "bold",
    color: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: "5%",
    alignItems: "center",
  },
  menucontainer: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 50,
  },
  searchcontainer: {
    paddingHorizontal: 15,
    marginTop: "10%",
    marginBottom:'10%'
  },
  input: {
    width: "90%",
    backgroundColor: "white",
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 40,
    position: "relative",
  },
  card1: {
    height: 200,
    width: 300,
    borderRadius: 12,
    backgroundColor: "#5D9D0B",
    marginTop: 10,
    marginRight: 15,
    paddingTop: 14,
    justifyContent: "flex-end",
  },
  card2: {
    height: 200,
    width: 300,
    borderRadius: 12,
    backgroundColor: "#72EB3A",
    marginTop: 10,
    marginRight: 15,
    paddingTop: 14,
    justifyContent: "flex-end",
  },
  cardcontainer: {
    
    paddingHorizontal: 15,
  },
  cardtext: {
    fontSize: 18,
    color: "white",
  },
  recents: {
    marginTop: "10%",
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  recenttext: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  recentitems1: {
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#1B1D24",
    borderRadius: 12,
    justifyContent: "space-between",
    marginBottom: "10%",
  },
  recentitems2: {
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#ccc",
    borderRadius: 12,
    justifyContent: "space-between",
    marginBottom: "10%",
    padding: 5,
  },
  toggle: {
    backgroundColor: "black",
    borderRadius: 12,
    flexDirection: "row",
    height: "80%",
    width: "30%",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 3,
  },
  button: {
    backgroundColor: "#5D9D0B",
    width: "50%",
    height: "100%",
    borderRadius: 12,
    alignItems: "center",
  },
});
