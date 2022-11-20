import { View, Image, Text } from "react-native";

import bg from "../assets/bg.png";

import TopBar from "../components/TopBar";

import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

export default function Home() {
    return (
        <View className="flex-1 flex-col items-center justify-center">
            <TopBar
                icon1={"filter-outline"}
                icon2={"md-chatbubbles-outline"}
                title={"Profile Feed"}
                Icons1={MaterialCommunityIcons}
                Icons2={Ionicons}
            />
            <Image source={bg} className="absolute -z-10" />
            <Text className="text-white">Home</Text>
        </View>
    );
}
