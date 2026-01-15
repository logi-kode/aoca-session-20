import AsyncStorage from "@react-native-async-storage/async-storage"
import { useRouter } from "expo-router"
import { useState } from "react"
import { Button, Platform, Text, TextInput, View } from "react-native"

import axiosClient from "../../api/axiosClient";

export default function LoginScreen() {
    const router = useRouter();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")

    const onLogin = async () => {
        try {
            const { data } = await axiosClient.post("/api/users/login", { email, password })

            await AsyncStorage.setItem("token", data.token)

            requestAnimationFrame(() => {
                router.replace("/profile");
            });

            if (Platform.OS === "web") {
                setTimeout(() => {
                    if (location.pathname.includes("/auth")) {
                        window.location.assign("/profile")
                    }
                }, 200);
            }
        } catch (err: any) {
            setMsg(err?.response?.data?.error || "Login gagal")
        }
    }

    return (
        <View style={{ flex: 1, padding: 16, justifyContent: "center" }}>
            <Text style={{ fontSize: 22, marginBottom: 12 }}>Login</Text>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail}
                style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} keyboardType="email-address" />
            <TextInput placeholder="Password" value={password} onChangeText={setPassword}
                style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} secureTextEntry />
            <Button title="Masuk" onPress={onLogin} />
            {msg ? <Text style={{ marginTop: 10 }}>{msg}</Text> : null}
            <Text style={{ marginTop: 16 }} onPress={() => router.push("/auth/register")}>
                Belum punya akun? Daftar
            </Text>
        </View>
    )
}