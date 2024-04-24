import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout() {
    const client = new QueryClient();
    return (
        <QueryClientProvider client={client}>
            <Stack>
                <Stack.Screen
                    name="(tabs)"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="cards/[id]"
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack>
        </QueryClientProvider>
    );
}
