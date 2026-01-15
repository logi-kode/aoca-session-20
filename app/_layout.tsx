import { Stack, useRouter, useSegments } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";

export default function RootLayout() {
  const [token, setToken] = useState<string | null>(null)
  const [ready, setReady] = useState(false)
  const segments = useSegments()
  const router = useRouter()

  const readToken = useCallback(async () => {
    const t = await AsyncStorage.getItem("token")
    setToken(t)
    setReady(true)
  }, [])

  useEffect(() => { readToken() }, [readToken]);

  useFocusEffect(useCallback(() => { readToken() }, [readToken]))

  useEffect(() => {
    if (!ready) return;
    const inAuth = segments[0] === "auth";
    if (!token && !inAuth) router.replace("/auth/login")
  }, [ready, token, segments]);

  if (!ready) return null

  return (
    <Stack screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="products/index" options={{ title: 'Products' }} />
      <Stack.Screen name="products/[id]" options={{ title: 'Product Details' }} />
      <Stack.Screen name="auth/login" options={{ title: "Login" }} />
      <Stack.Screen name="auth/register" options={{ title: "Register" }} />
    </Stack>
  )
}