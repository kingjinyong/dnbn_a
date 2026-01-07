import { Text, View, ScrollView } from "react-native";
import { styles } from "./notifications.styles";

export default function NotificationsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>알림</Text>
        <Text style={styles.emptyText}>새로운 알림이 없습니다 🔔</Text>
      </View>
    </ScrollView>
  );
}
