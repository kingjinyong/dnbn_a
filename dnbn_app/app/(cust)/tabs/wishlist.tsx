import { Text, View, ScrollView } from "react-native";
import { styles } from "./wishlist.styles";

export default function WishlistScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>찜목록</Text>
                <Text style={styles.emptyText}>찜한 상품이 없습니다 ❤️</Text>
            </View>
        </ScrollView>
    );
}