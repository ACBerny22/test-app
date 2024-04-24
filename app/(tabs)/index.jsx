import {
    View,
    Text,
    StatusBar,
    ScrollView,
    TextInput,
    Image,
} from "react-native";
import Card from "../../components/Card";
import { useState, useEffect } from "react";
import ArivalCard from "../../components/ArivalCard";
import { AntDesign } from "@expo/vector-icons";

export default function IndexPage() {
    const options = [
        {
            id: 1,
            title: "Logitech MX-Pro",
            price: 199.99,
        },
        {
            id: 2,
            title: "Razer Mamba",
            price: 102.65,
        },
        {
            id: 3,
            title: "HyperX PusleFire",
            price: 155.9,
        },
    ];
    const [user, setUser] = useState();

    useEffect(() => {
        async function getUser() {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users/2"
            );
            const data = await response.json();
            console.log(data);
            setUser(data);
        }
        getUser();
    }, []);

    return (
        <ScrollView className="flex-1 bg-zinc-100">
            <View className="bg-black w-screen pt-20 mb-8 px-5">
                <View className="flex flex-col gap-3 mb-8 ">
                    <View className="flex flex-row justify-between items-center mb-5">
                        <Text className="text-lg font-light text-white">
                            {user?.name}
                        </Text>
                        <Image
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 100,
                            }}
                            source={{
                                uri: "https://randomuser.me/api/portraits/women/12.jpg",
                            }}
                        />
                    </View>
                    <Text className="font-bold text-3xl text-white">
                        Welcome Again!!
                    </Text>
                    <StatusBar style="auto" />
                </View>
            </View>
            <View className="px-5">
                <View className="flex flex-row items-center gap-3">
                    <AntDesign name="search1" size={24} color="black" />
                    <TextInput
                        className="border border-zinc-300 p-2 rounded-full text-lg bg-white w-5/6"
                        placeholder="Search Products"
                    ></TextInput>
                </View>
                <View className="flex flex-col gap-7 mb-10 mt-5">
                    <Text className="font-bold text-3xl">Latest Arivals</Text>
                    <ScrollView horizontal className="flex-wrap">
                        <ArivalCard></ArivalCard>
                        <ArivalCard></ArivalCard>
                        <ArivalCard></ArivalCard>
                    </ScrollView>
                </View>
                <View className="mb-10">
                    <Text className="font-semibold text-xl mb-5">
                        Featured Items:
                    </Text>
                    <ScrollView horizontal className="flex-wrap">
                        {options.map((option) => {
                            return (
                                <Card
                                    key={option.id}
                                    id={option.id}
                                    title={option.title}
                                    price={option.price}
                                >
                                    {option.title}
                                </Card>
                            );
                        })}
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    );
}
