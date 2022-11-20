import { View, Image, Text } from "react-native";

import bg from "../assets/bg.png";

import TopBar from "../components/TopBar";

import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

export default function CreateParty() {
    return (
        <View className="flex-1 items-center justify-center">
            <TopBar
                icon1={"undo-variant"}
                icon2={"check"}
                title={"Create party"}
                Icons1={MaterialCommunityIcons}
                Icons2={AntDesign}
            />
            <Image source={bg} className="absolute -z-10" />
            <Text className="text-white">Create Party</Text>
        </View>
    );
}
