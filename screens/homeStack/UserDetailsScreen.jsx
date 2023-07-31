import { Button, StyleSheet, Text, View } from "react-native"
import React, { useLayoutEffect } from "react"
import { useNavigation, useRoute } from "@react-navigation/native"
import UserContent from "../../components/UserContent"

const UserDetailsScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const { params } = route

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: params.user.name,
    })
  })

  return (
    <View>
      <Button onPress={() => navigation.goBack()} title="Go Back" />
      <UserContent user={params.user} />
    </View>
  )
}

export default UserDetailsScreen

const styles = StyleSheet.create({})
