import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";

import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
    default: "native",
});

export default function App() {
    const [count, setCount] = useState(0);
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Button
                title="Click Me"
                onPress={() => {
                    setCount(count + 1);
                }}
            ></Button>
            <Text>{count}</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 50,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
