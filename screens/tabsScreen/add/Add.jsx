import PickerComponent from "./PickerComponent"
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
import { useState, useEffect } from "react"
import Table from "./Table"
import TotalCompenent from "./TotalCompenent"
import { Ionicons } from "@expo/vector-icons"
import InputComponent from "./InputComponent"

const betss = [
  {
    number: "234",
    bet: "30",
    game: "3d",
    time: "5pm",
    rumble: false,
  },
  {
    number: "123",
    bet: "50",
    game: "3d",
    time: "9pm",
    rumble: false,
  },
]

const Add = () => {
  // PICKER STATE
  const [game, setGame] = useState("3d")
  const [time, settime] = useState("12am")

  const pickerContent = [
    {
      val: game,
      set: setGame,
      icon: "game-controller-outline",
      labelValue: [
        { label: "2D", value: "2d" },
        { label: "3D", value: "3d" },
        { label: "4D", value: "4d" },
      ],
    },
    {
      val: time,
      set: settime,
      icon: "time-outline",
      labelValue: [
        { label: "12: am", value: "12am" },
        { label: "05: 00 pm", value: "5pm" },
        { label: "09: 00 pm", value: "9pm" },
      ],
    },
  ]

  // TOTAL STATE
  const [total, setTotal] = useState("")

  // INPUT BET
  const [number, setnumber] = useState("")
  const [bet, setbet] = useState("")
  const [rumble, setRumble] = useState(false)
  const [bets, setbets] = useState([])

  const inputStates = {
    game: game,
    time: time,
    number: number,
    setnumber: setnumber,
    bet: bet,
    setbet: setbet,
    rumble: rumble,
    setRumble: setRumble,
    bets: bets,
    setbets: setbets,
  }

  useEffect(() => {
    const totalBetAmount = bets.reduce(
      (accumulator, currentBet) =>
        parseInt(accumulator) + parseInt(currentBet.bet),
      0
    )

    setTotal(totalBetAmount)
  }, [bets])

  return (
    <ScrollView style={styles.container}>
      {/* PICKER */}
      {pickerContent.map((picker, ind) => (
        <PickerComponent key={ind} pickerContent={picker} />
      ))}
      {/* Table */}
      <Table bets={bets} />
      {/* DISPLAY TOTAL */}
      <TotalCompenent total={total} />

      {/* INPUT BET */}
      <InputComponent inputStates={inputStates} />
    </ScrollView>
  )
}

export default Add

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
})
