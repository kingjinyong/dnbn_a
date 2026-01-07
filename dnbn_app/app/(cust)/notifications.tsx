import { Text, View, ScrollView } from "react-native";
import { styles } from "./notifications.styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function NotificationsScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      {insets.top > 0 && (
        <View style={{ height: insets.top, backgroundColor: "#FFFFFF"}} />
      )}
      <ScrollView style={styles.content}>
        <Text style={styles.title}>알림</Text>
        <Text style={styles.emptyText}>새로운 알림이 없습니다 🔔</Text>
      </ScrollView>
      {insets.bottom > 0 && (
        <View style={{ height: insets.bottom, backgroundColor: "#000"}} />
      )}
    </View>
  );
}
