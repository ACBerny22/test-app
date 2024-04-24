import {
    View,
    Text,
    StatusBar,
    ScrollView,
    TextInput,
    Image,
} from "react-native";
import Card from "../../components/Card";
import ArivalCard from "../../components/ArivalCard";
import { AntDesign } from "@expo/vector-icons";
import { useQuery, useFocusEffect } from "@tanstack/react-query";
import { useNavigation } from "@react-navigation/native";

async function fetchProducts() {
    const response = await fetch(
        "https://api.escuelajs.co/api/v1/products?offset=3&limit=3"
    );
    const data = await response.json();
    return data;
}

async function fetchUser() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/2"
    );
    const data = await response.json();
    return data;
}

export default function IndexPage() {
    const navigation = useNavigation();

    const {
        isLoading: productIsLoading,
        error: productError,
        data: productData,
        refetch,
    } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
    });

    const { data: user } = useQuery({
        queryKey: ["user"],
        queryFn: fetchUser,
    });

    if (productIsLoading) {
        return (
            <View className="px-8 py-20">
                <Text>Loading...</Text>
            </View>
        );
    }
    useFocusEffect(() => {
        // Refetch data when the component is focused (i.e., navigated back to)
        refetch({ notifyOnChangeProps: ["focused"] });
    }, [navigation.getState().routes[navigation.getState().index].name]); // Track navigation state changes

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
                    <ScrollView className="">
                        {productData?.map((option) => {
                            return (
                                <Card
                                    key={option.id}
                                    id={option.id}
                                    title={option.title}
                                    description={option.description}
                                    price={option.price}
                                    category={option.category.name}
                                    image={option.images[0]}
                                />
                            );
                        })}
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    );
}
