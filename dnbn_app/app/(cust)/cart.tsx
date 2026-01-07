import { Text, View, ScrollView } from "react-native";
import { styles } from "./cart.styles";

export default function CartScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>장바구니</Text>
                <Text style={styles.emptyText}>장바구니가 비어있습니다 🛒</Text>
            </View>
        </ScrollView>
    );
}


