import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { Picker } from "@react-native-picker/picker"
import { Ionicons } from "@expo/vector-icons"

const PickerComponent = ({ pickerContent }) => {
  return (
    <View style={styles.pickerWrapper}>
      <Text>
        <Ionicons name={pickerContent.icon} size={24} color="black" />
      </Text>
      <Picker
        selectedValue={pickerContent.val}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => pickerContent.set(itemValue)}
      >
        {pickerContent.labelValue.map((item, ind) => (
          <Picker.Item key={ind} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  )
}

export default PickerComponent

const styles = StyleSheet.create({
  pickerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 50,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingVertical: 5,
  },
  picker: {
    // height: 40,
    // width: "80%",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    // marginVertical: 10,
    fontSize: 18,
    // backgroundColor: "hsl(0, 80%, 90%)",
    borderRadius: 5,
  },
})

{
  /* <View style={styles.pickerWrapper}>
<Text>
  <Ionicons name="game-controller-outline" size={24} color="black" />
</Text>
<Picker
  selectedValue={game}
  style={styles.picker}
  onValueChange={(itemValue, itemIndex) => setGame(itemValue)}
>
  <Picker.Item label="2D" value="2d" />
  <Picker.Item label="3D" value="3d" />
  <Picker.Item label="4D" value="4d" />
</Picker>
</View> */
}
