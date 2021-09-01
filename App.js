import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Details } from "./screens";
const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: ({ focused }) => {
          if (route.name === "Home") {
            return focused ? (
              <Text
                style={{
                  marginLeft: 15,
                  color: "#C36839"
                }}
              >
                Home
              </Text>
            ) : null;
          } else if (route.name === "Profile") {
            return focused ? (
              <Text
                style={{
                  marginLeft: 15,
                  color: "#C36839"
                }}
              >
                Profile
              </Text>
            ) : null;
          } else if (route.name === "Cart") {
            return focused ? (
              <Text
                style={{
                  marginLeft: 15,
                  color: "#C36839"
                }}
              >
                Cart
              </Text>
            ) : null;
          } else if (route.name === "Search") {
            return focused ? (
              <Text
                style={{
                  marginLeft: 15,
                  color: "#C36839"
                }}
              >
                Search
              </Text>
            ) : null;
          }
        },
        tabBarActiveBackgroundColor: "#f3ede6",
        tabBarActiveTintColor: "#C36839",
        tabBarInactiveTintColor: "gray",
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          borderTopColor: "#fff",
          paddingBottom: 5,
          paddingTop: 5,
          paddingLeft: 5,
          height: 53
        },
        tabBarItemStyle: {
          borderRadius: 5
        }
      })}
    >
      <Tab.Screen
        options={{
          headerShown: false
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>SearchScreen!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ProfileScreen!</Text>
    </View>
  );
}

function CartScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>CartScreen!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Home"}
        screenOptions={{
          headerTintColor: "#fff",
          headerTitleStyle: { alignSelf: "center" }
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
