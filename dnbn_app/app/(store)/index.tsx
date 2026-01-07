import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function StoreDashboardScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>가맹점 대시보드</Text>
                <Text style={styles.subtitle}>환영합니다! 📊</Text>
                
                <View style={styles.statsContainer}>
                    <View style={styles.statCard}>
                        <Text style={styles.statNumber}>0</Text>
                        <Text style={styles.statLabel}>오늘 주문</Text>
                    </View>
                    
                    <View style={styles.statCard}>
                        <Text style={styles.statNumber}>0</Text>
                        <Text style={styles.statLabel}>진행 중</Text>
                    </View>
                    
                    <View style={styles.statCard}>
                        <Text style={styles.statNumber}>0</Text>
                        <Text style={styles.statLabel}>완료</Text>
                    </View>
                </View>
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
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    subtitle: {
        fontSize: 18,
        color: '#666',
        marginBottom: 30,
    },
    statsContainer: {
        flexDirection: 'row',
        gap: 15,
    },
    statCard: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    statNumber: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FF9500',
        marginBottom: 5,
    },
    statLabel: {
        fontSize: 14,
        color: '#666',
    },
});
