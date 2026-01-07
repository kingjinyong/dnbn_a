import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function StoreSettingsScreen() {
    const router = useRouter();
    
    const handleLogout = () => {
        router.replace('/login');
    };
    
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>가맹점 설정</Text>
                
                <View style={styles.settingSection}>
                    <Text style={styles.sectionTitle}>매장 정보</Text>
                    <TouchableOpacity style={styles.settingItem}>
                        <Text style={styles.settingText}>매장명 변경</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingItem}>
                        <Text style={styles.settingText}>영업 시간 설정</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.settingSection}>
                    <Text style={styles.sectionTitle}>계정</Text>
                    <TouchableOpacity style={styles.settingItem} onPress={handleLogout}>
                        <Text style={[styles.settingText, styles.logoutText]}>로그아웃</Text>
                    </TouchableOpacity>
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
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#333',
    },
    settingSection: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 15,
        color: '#333',
    },
    settingItem: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
    settingText: {
        fontSize: 16,
        color: '#333',
    },
    logoutText: {
        color: '#FF3B30',
    },
});
