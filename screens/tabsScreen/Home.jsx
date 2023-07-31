import { StyleSheet, Text, View } from "react-native"
import React from "react"
// import Users from "../Users.json"
import User from "../../components/User"
import axios from "axios"
import { useState } from "react"

const Home = () => {
  const [users, setUsers] = useState([])

  const URL =
    "https://api-test-production-09d0.up.railway.app/api/Show?fbclid=IwAR0jfL3g_iJeAClYAmSl29t-CatWieZ33z5wcWvtyGpMEtPKmejuXbUho3k"
  const getUser = async () => {
    const res = await fetch(URL)
    const data = await res.json()
    setUsers(data)
  }
  getUser()

  return (
    <View>
      <Text>Users List</Text>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
