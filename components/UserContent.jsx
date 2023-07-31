import { StyleSheet, Text, View } from "react-native"
import React from "react"

const UserContent = ({ user }) => {
  return (
    <View>
      <Text>{user.id}</Text>
      <Text>{user.complete_name}</Text>
      <Text>{user.role}</Text>
      <Text>{user.area_name}</Text>
      <Text>{user.location}</Text>
      <Text>{user.username}</Text>
      <Text>{user.phone_number}</Text>
    </View>
  )
}

export default UserContent

const styles = StyleSheet.create({})
