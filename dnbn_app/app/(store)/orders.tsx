import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function StoreOrdersScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>주문 관리</Text>
                <Text style={styles.emptyText}>새로운 주문이 없습니다 📋</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 400,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    emptyText: {
        fontSize: 16,
        color: '#666',
    },
});
