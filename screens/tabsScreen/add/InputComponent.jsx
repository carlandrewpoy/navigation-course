import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
  TextInput,
  Button,
} from "react-native"

import { Ionicons } from "@expo/vector-icons"
import useGenerateCombinations from "../hooks/useGenerateCombinations"

const InputComponent = ({ inputStates }) => {
  const {
    game,
    time,
    number,
    setnumber,
    bet,
    setbet,
    rumble,
    setRumble,
    bets,
    setbets,
  } = inputStates

  const handleAdd = () => {
    if (rumble) {
      const generatedNumbers = useGenerateCombinations(number)
      const allRumbleBets = generatedNumbers.map((num) => ({
        number: num,
        bet: (bet / generatedNumbers.length).toFixed(2),
        game: game,
        time: time,
        rumble: rumble,
      }))

      setbets([...bets, ...allRumbleBets])
    }
    if (!rumble) {
      setbets([
        ...bets,
        {
          number: number,
          bet: bet,
          game: game,
          time: time,
          rumble: rumble,
        },
      ])
      console.log("outside")
    }

    setnumber("")
    setbet("")
    setRumble(false)
  }

  // console.log(setbets)

  const MyCheckbox = () => {
    return (
      <Pressable
        style={[styles.checkboxBase, rumble && styles.checkboxChecked]}
        onPress={() => setRumble(!rumble)}
      >
        {rumble && <Ionicons name="checkmark" size={24} color="white" />}
      </Pressable>
    )
  }

  return (
    <KeyboardAvoidingView enabled behavior="padding">
      <View style={styles.inputWrapper}>
        <TextInput
          value={number}
          onChangeText={(text) => setnumber(text)}
          style={styles.input}
          placeholder="Combinations"
          inputMode="numeric"
        />
        <TextInput
          value={bet}
          onChangeText={(text) => setbet(text)}
          style={styles.input}
          placeholder="Amount"
          inputMode="numeric"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
      >
        <Text style={{ fontSize: 20, marginRight: 10 }}>Rumble?</Text>
        <MyCheckbox />
      </View>
      <Button
        onPress={handleAdd}
        title="Add"
        titleStyle={{ color: "black" }}
        type="outline"
        buttonStyle={{
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 10,
          color: "black",
          paddingVertical: 10,
        }}
      />
    </KeyboardAvoidingView>
  )
}

export default InputComponent

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    width: "45%",
    borderRadius: 10,
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "gray",
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    backgroundColor: "gray",
  },
})
