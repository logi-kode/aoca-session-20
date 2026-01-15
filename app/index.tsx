import {View, Text, Button, StyleSheet} from 'react-native';
import { router } from 'expo-router';

export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                RN Shop — Home
            </Text>
            <Text style={styles.subtitle}>
                Mulai belanja dengan melihat daftar produk.
            </Text>
            <Button title="Lihat Produk" onPress={() => router.push('products')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{flex: 1, justifyContent: 'center', alignItems:'center', padding: 16},
    title:{fontSize: 22, fontWeight: '700', marginBottom: 8},
    subtitle:{fontSize: 14, opacity: 0.8, marginBottom: 16, textAlign:'center'}
});