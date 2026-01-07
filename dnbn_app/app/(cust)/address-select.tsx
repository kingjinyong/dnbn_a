import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function AddressSelectScreen() {
    const router = useRouter();
    
    const handleSelect = () => {
        router.back();
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>주소 선택</Text>
            
            <TextInput
                style={styles.input}
                placeholder="주소 검색"
                placeholderTextColor="#999"
            />
            
            <TouchableOpacity style={styles.selectButton} onPress={handleSelect}>
                <Text style={styles.selectButtonText}>선택 완료</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    input: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        fontSize: 16,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    selectButton: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    selectButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
