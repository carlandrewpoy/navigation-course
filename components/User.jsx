import { Pressable } from "react-native"
import UserContent from "./UserContent"
import { useNavigation } from "@react-navigation/native"

const User = ({ user }) => {
  const { navigate } = useNavigation()
  return (
    <Pressable
      style={{ padding: 10, borderWidth: 1 }}
      onPress={() => navigate("UserDetailsScreen", { user })}
    >
      <UserContent user={user} />
    </Pressable>
  )
}
export default User
