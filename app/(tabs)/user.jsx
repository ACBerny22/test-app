import { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";

export default function UserView() {
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
        <View className="flex-1 justify-center items-center">
            <Image
                style={{ width: 100, height: 100, borderRadius:100 }}
                source={{
                    uri: "https://randomuser.me/api/portraits/women/12.jpg",
                }}
            />
            <Text className="text-2xl font-bold mt-5">{user?.name}</Text>
            <Text className="text-xl mb-10">@{user?.username}</Text>
            <Text className="text-lg">{user?.phone}</Text>
            <Text>{user?.email}</Text>
        </View>
    );
}
