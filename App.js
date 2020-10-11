import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";

import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createStackNavigator, StackView } from "@react-navigation/stack";

import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

const stack = createStackNavigator();
const tabs = createBottomTabNavigator();
const drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              "https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png",
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";

  switch (routeName) {
    case "FirstPage":
      return "First";
    case "SecondPage":
      return "Second";
    case "ThirdPage":
      return "Third";
  }
}

function BottomTabs() {
  return (
    <tabs.Navigator>
      <tabs.Screen name="FirstPage" component={StackTabs} />
      <tabs.Screen name="SecondPage" component={SecondScreen} />
      <tabs.Screen name="ThirdPage" component={ThirdScreen} />
    </tabs.Navigator>
  );
}

function FirstScreen({ navigation }) {
  return (
    <stack.Navigator>
      <stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        })}
      />
    </stack.Navigator>
  );
}

function SecondScreen({ }) {
  return (
    <stack.Navigator>
      <stack.Screen
        initialParams={{ itemId: 42 }}
        name="SecondPage"
        component={SecondPage}
        options={{
          title: "Second Page",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </stack.Navigator>
  );
}
function ThirdScreen() {
  return (
    <stack.Navigator>
      <stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        initialParams={{ someParam: "Hello World" }}
        options={{
          title: "Third Page",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </stack.Navigator>
  );
}

function StackTabs({ navigation }) {
  return (
    <stack.Navigator initialRouteName="FirstPage">
      <stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        })}
      />
      <stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          title: "Second Page",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{
          title: "Third Page",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <drawer.Navigator
        drawerContentOptions={{
          activeTintColor: "#e91e63",
          itemStyle: { marginVertical: 5 },
        }}
      >
        <drawer.Screen
          name="FirstPage"
          component={BottomTabs}
          options={{ drawerLabel: "FirstPage" }}
        />
        <drawer.Screen
          name="SecondPage"
          component={SecondScreen}
          options={{ drawerLabel: "SecondPage" }}
        />
        <drawer.Screen
          name="ThirdPage"
          component={ThirdScreen}
          options={{ drawerLabel: "ThirdPage" }}
        />
      </drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
