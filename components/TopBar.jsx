import { View, Text, TouchableOpacity } from "react-native";

export default function TopBar({
    icon1,
    func1,
    icon2,
    func2,
    title,
    Icons1,
    Icons2,
}) {
    return (
        <View className="absolute top-3 flex flex-row items-center justify-between w-screen py-4 px-4 max-h-20">
            <TouchableOpacity
                className="flex py-2 px-5 rounded-full shadow-xl"
                style={{
                    backgroundColor: "rgba(24, 24, 24, 0.44)",
                    shadowColor: "rgba(0, 0, 0, 0.25)",
                }}
            >
                <Icons1 name={icon1} size={24} color="#C6C6C6" />
            </TouchableOpacity>
            <Text
                className="text-2xl text-gray-100"
                style={{ fontFamily: "Nunito-Bold" }}
            >
                {title}
            </Text>
            <TouchableOpacity
                className="flex py-2 px-5 rounded-full shadow-xl"
                style={{
                    backgroundColor: "rgba(24, 24, 24, 0.44)",
                    shadowColor: "rgba(0, 0, 0, 0.25)",
                }}
            >
                <Icons2 name={icon2} size={24} color="#C6C6C6" />
            </TouchableOpacity>
        </View>
    );
}
