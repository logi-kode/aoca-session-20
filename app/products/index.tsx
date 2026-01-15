import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native'
import { PRODUCTS, Product } from '../../data/products';
import {router} from 'expo-router'

export default function ProductList(){
    const renderItem = ({item} : {item: Product}) => (
        <TouchableOpacity style={styles.card} onPress={() => router.push(`/products/${item.id}`)}>
            <View style={styles.row}>
                <View style={styles.thumb}/>
                <View style={styles.info}>
                   <Text style={styles.name}>{item.name}</Text> 
                   <Text style={styles.price}>Rp {item.price.toLocaleString('id-ID')}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

    return(
        <View style={styles.container}>
            <FlatList
                data={PRODUCTS}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={{ height: 12}}/>}
                contentContainerStyle={{padding: 16}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex:1},
    card: {backgroundColor: '#fff', borderRadius: 12, padding: 12, elevation: 2},
    row: {flexDirection:'row', alignItems:'center'},
    thumb: {width: 64, height: 64, backgroundColor: '#eee', borderRadius: 12, marginRight: 12},
    info: {flex: 1, justifyContent: 'center'},
    name: {fontSize: 16, fontWeight: '600', marginBottom: 4},
    price: {fontSize: 14, opacity: 0.8},
})