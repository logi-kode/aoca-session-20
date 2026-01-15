import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router"
import { useState, useEffect } from "react"
import { Button, Text, View } from "react-native"
import axiosClient from "../../api/axiosClient";

export default function ProfileScreen() {
    const [me, setMe] = useState<any>(null)

    useEffect(() => {
        (async () => {
            const token = await AsyncStorage.getItem("token")
            if (!token) {
                router.replace("/auth/login");
                return;
            }

            try {
                const { data } = await axiosClient.get("/api/users/me");

                setMe(data)
            } catch {
                router.replace("/auth/login");
            }
        })()
    }, [])

    const logout = async () => {
        await AsyncStorage.removeItem("token")
        router.replace("/auth/login");
    }

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <Text style={{ fontSize: 22, marginBottom: 12 }}>Profil</Text>
            {me ? <Text>{JSON.stringify(me, null, 2)}</Text> : <Text>Memuat…</Text>}
            <Button title="Logout" onPress={logout} />
        </View>
    )
}
