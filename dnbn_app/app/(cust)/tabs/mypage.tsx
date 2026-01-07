import { Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "./mypage.styles";

export default function MyPage() {
  const router = useRouter();

  const handleLogout = () => {
    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>마이페이지</Text>
      <Text style={styles.subtitle}>사용자 정보 및 설정 👤</Text>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>로그아웃</Text>
      </TouchableOpacity>
    </View>
  );
}
