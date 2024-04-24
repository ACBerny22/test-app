import { useEffect } from "react";
import { Text, View, TextInput, Image } from "react-native";
import { Link, router } from "expo-router";

export default function Card(props) {
    useEffect(() => {
        console.log(props.id);
    }, []);

    return (
        <View className="flex  bg-white rounded-xl shadow-md mb-5">
            <Image
                className="rounded-t-xl"
                style={{
                    width: "100%",
                    height: 300,
                    resizeMode: "cover",
                }}
                source={{
                    uri: props.image,
                }}
            />
            <View className="p-8 justify-center items-start">
                <Link
                    href={`/cards/${props.id}`}
                    className=" bg-black rounded-xl p-3 mb-5 flex justify-center items-start"
                >
                    <Text className="text-white font-bold">
                        {props.category}
                    </Text>
                </Link>
                <Text className="text-black text-2xl font-semibold">
                    {props.title}
                </Text>
                <Text className="text-black mt-2 text-xl">${props.price}</Text>
                <Text className="text-zinc-600 mt-2 mb-8">
                    {props.description}
                </Text>
            </View>
        </View>
    );
}
