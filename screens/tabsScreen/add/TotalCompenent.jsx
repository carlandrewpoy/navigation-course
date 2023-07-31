import { StyleSheet, Text, View } from "react-native"
import React from "react"

const TotalCompenent = ({ total }) => {
  return (
    <View style={styles.total}>
      <View style={styles.col}>
        <Text style={styles.textTotal}>Total</Text>
      </View>
      <View style={styles.col}>
        <Text style={styles.textTotal}>{total}</Text>
      </View>
      <View style={styles.colLast}>
        <Text style={styles.textTotal}></Text>
      </View>
    </View>
  )
}

export default TotalCompenent

const styles = StyleSheet.create({
  total: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#ccc",
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 10,
  },
  textTotal: {
    fontSize: 18,
    color: "black",
  },
  col: {
    width: "45%",
    padding: 10,
  },
})
