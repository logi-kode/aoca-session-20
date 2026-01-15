import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { PRODUCTS } from '../../data/products';

export default function ProductDetails() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const product = PRODUCTS.find(p => p.id === String(id));

    if (!product) {
        return (
            <View style={styles.center}>
                <Text>Produk tidak ditemukan</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.hero} />
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>
                Rp {product.price.toLocaleString('id-ID')}
            </Text>
            <Text style={styles.desc}>{product.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    hero: {
        width: '100%', height: 200, backgroundColor: '#eee', borderRadius: 16, marginBottom: 16
    },
    name: { fontSize: 20, fontWeight: '700', marginBottom: 6 },
    price: { fontSize: 16, marginBottom: 8 },
    desc: {fontSize: 14, lineHeight: 20, opacity: 0.9}
});
