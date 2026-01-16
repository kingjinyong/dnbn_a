import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "./address-select.styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function AddressSelectScreen() {
    const router = useRouter();
    const insets = useSafeAreaInsets();
    
    const handleSelect = () => {
        router.back();
    };
    
    return (
        <View style={styles.container}>
            {insets.top > 0 && (
        <View style={{ height: insets.top, backgroundColor: "#FFFFFF"}} />
      )}
            <Text style={styles.title}>주소 선택</Text>
            
            <TextInput
                style={styles.input}
                placeholder="주소 검색"
                placeholderTextColor="#999"
            />
            
            <TouchableOpacity style={styles.selectButton} onPress={handleSelect}>
                <Text style={styles.selectButtonText}>선택 완료</Text>
            </TouchableOpacity>
            {insets.bottom > 0 && (
        <View style={{ height: insets.bottom, backgroundColor: "#000"}} />
      )}
        </View>
    );
}

