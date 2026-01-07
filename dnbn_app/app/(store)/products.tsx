import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";

export default function StoreProductsScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>상품 관리</Text>
                
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>+ 새 상품 추가</Text>
                </TouchableOpacity>
                
                <Text style={styles.emptyText}>등록된 상품이 없습니다 📦</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    addButton: {
        backgroundColor: '#FF9500',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    emptyText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginTop: 40,
    },
});
