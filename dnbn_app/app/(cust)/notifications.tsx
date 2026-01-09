import Ionicons from "@expo/vector-icons/build/Ionicons";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./notifications.styles";

export default function NotificationsScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      {insets.top > 0 && (
        <View style={{ height: insets.top, backgroundColor: "#FFFFFF"}} />
      )}
      <View style={styles.header}>
        {/* 현재 onPress의 router.back()이 작동하지 않아 navigate로 대체함 */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.navigate("/(cust)/tabs/custhome")}
        >
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title} pointerEvents="none">
          알림
        </Text>
        <View style={styles.placeholder} />
      </View>
      <ScrollView style={styles.content}>
        <Text style={styles.emptyText}>새로운 알림이 없습니다 🔔</Text>
      </ScrollView>
      {insets.bottom > 0 && (
        <View style={{ height: insets.bottom, backgroundColor: "#000"}} />
      )}
    </View>
  );
}
