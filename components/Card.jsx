import { useEffect } from "react";
import { Text, View, TextInput } from "react-native";
import { Link, router } from "expo-router";

export default function Card(props) {
    useEffect(() => {
        console.log(props.id);
    }, []);

    return (
        <View className="flex p-8 justify-center items-start bg-white rounded-xl shadow-md mr-5">
            <Text className="text-black text-2xl font-semibold">
                {props.title}
            </Text>
            <Text className="text-black mt-2 text-xl">${props.price}</Text>
            <Text className="text-zinc-600 mt-2 mb-8">
                Lorem ipsum dolebat -{" "}
                <Text className="font-bold text-zinc-600 ">(Dolis Vabel)</Text>
            </Text>
            <Link
                href={`/cards/${props.id}`}
                className=" bg-black rounded-xl p-3 flex justify-center items-start"
            >
                <Text className="text-white font-bold">Litter</Text>
            </Link>
        </View>
    );
}
