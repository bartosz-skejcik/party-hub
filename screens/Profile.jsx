import { View, Image, Text } from "react-native";

import bg from "../assets/bg.png";

import TopBar from "../components/TopBar";

import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

export default function Profile() {
    return (
        <View className="flex-1 items-center justify-center">
            <TopBar
                icon1={"people-outline"}
                icon2={"settings-outline"}
                title={"Profile"}
                Icons1={Ionicons}
                Icons2={Ionicons}
            />
            <Image source={bg} className="absolute -z-10" />
            <Text className="text-white">Profile</Text>
        </View>
    );
}
