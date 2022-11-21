import Home from "./screens/Home.jsx";
import Profile from "./screens/Profile.jsx";
import CreateParty from "./screens/CreateParty.jsx";

import { useFonts } from "expo-font";

import { Ionicons } from "@expo/vector-icons";

import { BlurView } from "expo-blur";
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";

const Tab = createBottomTabNavigator();

export default function App() {
    const [fontsLoaded] = useFonts({
        "Nunito-Medium": require("./assets/fonts/Nunito-Medium.ttf"),
        "Nunito-SemiBold": require("./assets/fonts/Nunito-SemiBold.ttf"),
        "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === "Home") {
                                iconName = "home-outline";
                                size = focused ? 30 : 25;
                            } else if (route.name === "Profile") {
                                iconName = "people-circle-outline";
                                size = focused ? 30 : 25;
                            } else if (route.name === "Create Party") {
                                iconName = "add-circle-outline";
                                size = focused ? 30 : 25;
                            }

                            // You can return any component that you like here!
                            return (
                                <Ionicons
                                    name={iconName}
                                    size={size}
                                    color={color}
                                />
                            );
                        },
                        tabBarActiveTintColor: "#AF70FF",
                        tabBarInactiveTintColor: "#8444A3",
                        tabBarStyle: {
                            borderWidth: 0,
                            borderTopWidth: 0,
                            position: "absolute",
                            bottom: 20,
                            left: 20,
                            right: 20,
                            borderRadius: 100,
                        },
                        tabBarBackground: () => (
                            <View
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: 150,
                                    overflow: "hidden",
                                }}
                            >
                                <BlurView
                                    intensity={50}
                                    tint="dark"
                                    style={{
                                        flex: 1,
                                    }}
                                />
                            </View>
                        ),
                    })}
                >
                    <Tab.Screen
                        name="Home"
                        component={Home}
                        options={{ headerShown: false, tabBarShowLabel: false }}
                    />
                    <Tab.Screen
                        name="Create Party"
                        component={CreateParty}
                        options={{ headerShown: false, tabBarShowLabel: false }}
                    />
                    <Tab.Screen
                        name="Profile"
                        component={Profile}
                        options={{ headerShown: false, tabBarShowLabel: false }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
            <StatusBar style="light" />
        </>
    );
}
