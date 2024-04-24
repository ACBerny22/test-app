import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#000000",
                tabBarStyle: { height: 70 },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: () => (
                        <AntDesign name="home" size={24} color="black" />
                    ),
                }}
            />
            <Tabs.Screen
                name="user"
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: () => (
                        <AntDesign name="user" size={24} color="black" />
                    ),
                }}
            />
        </Tabs>
    );
}
