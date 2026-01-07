import { Text, View } from "react-native";
import { styles } from "./search.styles";

export default function CustSearchScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>주문 내역</Text>
            <Text style={styles.subtitle}>주문 내역이 없습니다 📦</Text>
        </View>
    );
}

