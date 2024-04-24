import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function CardId(props) {
    const { id } = useLocalSearchParams();
    return (
        <View className="px-8 py-20">
            <Text>CardId</Text>
            <Text>{id}</Text>
        </View>
    );
}
