import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./screens/tabsScreen/Home"
import Result from "./screens/tabsScreen/Result"
import { Ionicons } from "@expo/vector-icons"
import Add from "./screens/tabsScreen/add/Add"
import UserDetailsScreen from "./screens/homeStack/UserDetailsScreen"

const Navigation = () => {
  // Stack
  const HomeStack = createNativeStackNavigator()

  const HomeStackGroup = () => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen
          name="UserDetailsScreen"
          component={UserDetailsScreen}
          // options={{
          //   presentation: "fullScreenModal",
          // }}
        />
      </HomeStack.Navigator>
    )
  }

  // Tab Bottom
  const Tab = createBottomTabNavigator()
  const TabGroup = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route, navigation }) => ({
          tabBarIcon: ({ color, focused, size }) => {
            let iconName
            if (route.name === "HomeStackGroup") {
              iconName = focused ? "home" : "home-outline"
            } else if (route.name === "Add") {
              iconName = focused ? "add-circle-sharp" : "add-circle-outline"
            } else if (route.name === "Result") {
              iconName = focused ? "list-circle" : "list-circle-outline"
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: "#1DA1F2",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name={"Add"} component={Add} />
        <Tab.Screen
          name={"HomeStackGroup"}
          component={HomeStackGroup}
          options={{
            headerShown: false,
            tabBarLabel: "Home",
          }}
        />
        <Tab.Screen name={"Result"} component={Result} />
      </Tab.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>
  )
}

export default Navigation
