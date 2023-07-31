import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import React from "react"
import { AntDesign } from "@expo/vector-icons"

const BetList = ({ item }) => {
  return (
    <View style={styles.row}>
      <View style={styles.col}>
        <Text style={styles.text}>{item.game}</Text>
      </View>
      <View style={styles.col}>
        <Text style={styles.text}>{item.number}</Text>
      </View>
      <View style={styles.col}>
        <Text style={styles.text}>{item.bet}</Text>
      </View>
      {/* <View style={styles.col}>
        <Text style={styles.text}>{item.time}</Text>
      </View> */}
      <View style={styles.colLast}>
        <TouchableOpacity>
          <Text style={styles.text}>
            <AntDesign name="close" size={24} color="black" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default BetList

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: "30%",
  },
  col: {
    width: "30%",
    paddingHorizontal: 10,
  },
  colLast: {
    width: "10%",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 5,
    borderBottomWidth: 1,
    borderColor: "hsl(0, 10%, 80%)",
  },
})
