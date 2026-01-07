import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { styles } from "./login.styles";

export default function LoginScreen() {
  const router = useRouter();
  const [userType, setUserType] = useState<"cust" | "store">("cust");

  const handleLogin = (type: "cust" | "store") => {
    if (type === "cust") {
      router.replace("/(cust)/tabs/custhome");
    } else {
      router.replace("/(store)");
    }
  };

  const handleSNSLogin = (provider: "kakao" | "naver") => {
    // SNS 로그인 처리 (나중에 구현)
    console.log(`${provider} 로그인`);
    router.replace("/(cust)/tabs/custhome");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("@/assets/images/logo.png")} />

      <View style={styles.typeSelector}>
        <TouchableOpacity
          style={[
            styles.typeButton,
            userType === "cust" && styles.typeButtonActive,
          ]}
          onPress={() => setUserType("cust")}
        >
          <Text
            style={[
              styles.typeButtonText,
              userType === "cust" && styles.typeButtonTextActive,
            ]}
          >
            일반
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.typeButton,
            userType === "store" && styles.typeButtonActive,
          ]}
          onPress={() => setUserType("store")}
        >
          <Text
            style={[
              styles.typeButtonText,
              userType === "store" && styles.typeButtonTextActive,
            ]}
          >
            사업자
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="아이디"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="비밀번호"
          placeholderTextColor="#999"
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => handleLogin(userType)}
      >
        <Text style={styles.loginButtonText}>로그인</Text>
      </TouchableOpacity>

      <View style={styles.linkContainer}>
        <TouchableOpacity>
          <Text style={styles.linkText}>아이디 찾기</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity>
          <Text style={styles.linkText}>비밀번호 찾기</Text>
        </TouchableOpacity>
        {userType === "cust" && (
          <>
            <View style={styles.separator} />
            <TouchableOpacity>
              <Text style={styles.linkText}>회원가입</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      {userType === "cust" && (
        <View style={styles.snsContainer}>
          <TouchableOpacity
            style={[styles.snsButton, styles.kakaoButton]}
            onPress={() => handleSNSLogin("kakao")}
          >
            <Text style={styles.kakaoButtonText}>카카오톡 로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.snsButton, styles.naverButton]}
            onPress={() => handleSNSLogin("naver")}
          >
            <Text style={styles.naverButtonText}>네이버 로그인</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}


