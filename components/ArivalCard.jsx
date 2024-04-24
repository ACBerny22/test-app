import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function ArivalCard(props) {
    return (
        <View className="rounded-xl bg-white mr-5">
            <Image
                className="rounded-t-xl"
                style={{
                    width: "100%",
                    height: 200,
                    resizeMode: "cover",
                }}
                source={require("E:/MyPortfolio/test-app/assets/controller-2.jpg")}
            />
            <View className="flex gap-2 p-5">
                <Text className="font-bold text-xl">DualShock 4</Text>
                <Text className="">Lorem ipsum dolor sit amet.</Text>
                <View className="flex flex-row gap-1">
                    <AntDesign name="star" size={12} color="black" />
                    <AntDesign name="star" size={12} color="black" />
                    <AntDesign name="star" size={12} color="black" />
                    <AntDesign name="star" size={12} color="black" />
                    <AntDesign name="staro" size={12} color="black" />
                </View>
                <Text className="text-2xl font-bold">$80</Text>
                <TouchableOpacity className="bg-black rounded-xl p-3 flex flex-row justify-center items-center">
                    <AntDesign name="shoppingcart" size={24} color="white" />
                    <Text className="text-lg text-white ml-3">Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
