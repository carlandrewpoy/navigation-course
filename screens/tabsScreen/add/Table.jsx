import { StyleSheet, Text, View } from "react-native"
import React from "react"
import BetList from "./BetList"
import { Ionicons } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"
import { MaterialCommunityIcons } from "@expo/vector-icons"
// import { FlatList, ScrollView } from "react-native-gesture-handler"
import BetListTwo from "./BetListTwo"
import { ScrollView } from "react-native-gesture-handler"

const Table = ({ bets }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.col}>
          <Text style={styles.text}>
            <Ionicons name="game-controller-outline" size={24} color="black" />
          </Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.text}>
            <MaterialCommunityIcons
              name="sort-numeric-variant"
              size={24}
              color="black"
            />
          </Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.text}>
            <FontAwesome name="money" size={24} color="black" />
          </Text>
        </View>

        {/* <View style={styles.col}>
          <Text style={styles.text}>Time</Text>
        </View> */}
        <View style={styles.colLast}>
          <Text style={styles.text}></Text>
        </View>
      </View>
      {/* <ScrollView> */}
      {/* </ScrollView> */}
      {/* <View>
        <BetListTwo />
      </View> */}
      <View>
        {bets.map((item, ind) => (
          <BetList key={ind} item={item} />
        ))}
      </View>

      {/* <FlatList
        nestedScrollEnabled={true}
        data={bets}
        renderItem={({ item }) => <BetList item={item} />}
        keyExtractor={(item) => item.id}
      /> */}
    </View>
  )
}

export default Table

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    // maxHeight: "100%",
    overflow: "hidden",
    borderRadius: 10,
    paddingBottom: 10,
  },
  col: {
    width: "30%",
    padding: 10,
  },
  colLast: {
    width: "10%",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
  textEmpty: {
    fontSize: 20,
    paddingTop: 5,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#ccc",
    padding: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  total: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "gray",
    paddingHorizontal: 5,
  },
  textTotal: {
    fontSize: 18,
  },
})
