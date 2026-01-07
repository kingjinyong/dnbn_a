import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./address.styles";

export default function GiftBox() {
  const insets = useSafeAreaInsets();


  return (
    <View>
      {insets.top > 0 && (
        <View style={{ height: insets.top, backgroundColor: "#FFFFFF" }} />
      )}
      
      <View style={styles.header}>
          <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push('/tabs/mypage')}
          >
          <Ionicons name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title} pointerEvents="none">
          알림 설정
          </Text>
          <View style={styles.placeholder} />
      </View>

      <View style={styles.notificationContainer}>
        
      <View>
        <Text>선물함임</Text> 
      </View>
      </View>

      {insets.bottom > 0 && (
                <View style={{ height: insets.bottom, backgroundColor: '#000' }} />
            )}

    </View>
  )
}