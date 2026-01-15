import Ionicons from "@expo/vector-icons/build/Ionicons";
import { router } from "expo-router";
import { useRef, useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./faqlist.styles";

export default function FaqListScreen() {
  const insets = useSafeAreaInsets();
  const scrollViewRef = useRef<ScrollView>(null);
  const [selectedSubject, setSelectedSubject] = useState("주문/결제");

  
  const faqData = [
    {
      faqType: "요금제",
      faqList: [
        {
          faqTitle: "1",
          faqContent: "답변"
        },
        {
          faqTitle: "2",
          faqContent: "답변"
        },
        {
          faqTitle: "3",
          faqContent: "답변"
        },
        {
          faqTitle: "4",
          faqContent: "답변"
        },
        {
          faqTitle: "5",
          faqContent: "답변"
        },
        {
          faqTitle: "6",
          faqContent: "답변"
        },
        {
          faqTitle: "질문",
          faqContent: "답변"
        },
        {
          faqTitle: "질문",
          faqContent: "답변"
        }
      ]
    },
    {
      faqType: "서비스",
      faqList: [
        {
          faqTitle: "질문",
          faqContent: "답변"
        },
        {
          faqTitle: "2",
          faqContent: "답변"
        },
        {
          faqTitle: "질문",
          faqContent: "답변"
        },
        {
          faqTitle: "3",
          faqContent: "답변"
        },
        {
          faqTitle: "4",
          faqContent: "답변"
        },
        {
          faqTitle: "질문",
          faqContent: "답변"
        },
        {
          faqTitle: "질문",
          faqContent: "답변"
        },
        {
          faqTitle: "질문",
          faqContent: "답변"
        }
      ]
    }
  ];

  const currentFaqItems =
    faqData.find((faq) => faq.faqType === selectedSubject)?.faqList || [];

  return (
    <View style={styles.container}>
      {insets.top > 0 && (
        <View style={{ height: insets.top, backgroundColor: "#FFFFFF" }} />
      )}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>자주 묻는 질문</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView
        ref={scrollViewRef}
        style={styles.faqInnerContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.faqHeaderContainer}>
          <View style={styles.faqSearchContainer}>
            <TextInput
              style={styles.faqSearchPlaceholderText}
              placeholder="검색어를 입력해 주세요."
            />
            <Ionicons name="search" size={20} color="#CCCCCC" />
          </View>
        </View>

        <View style={styles.faqSubjectContainer}>
          <Pressable
            style={[
              styles.faqSubjectButton,
              selectedSubject === "주문/결제"
                ? styles.faqSubjectButtonSelected
                : styles.faqSubjectButtonUnselected,
            ]}
            onPress={() => setSelectedSubject("주문/결제")}
          >
            <Text
              style={[
                styles.faqSubjectButtonText,
                selectedSubject === "주문/결제"
                  ? styles.faqSubjectButtonTextSelected
                  : styles.faqSubjectButtonTextUnselected,
              ]}
            >
              주문/결제
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.faqSubjectButton,
              selectedSubject === "배송"
                ? styles.faqSubjectButtonSelected
                : styles.faqSubjectButtonUnselected,
            ]}
            onPress={() => setSelectedSubject("배송")}
          >
            <Text
              style={[
                styles.faqSubjectButtonText,
                selectedSubject === "배송"
                  ? styles.faqSubjectButtonTextSelected
                  : styles.faqSubjectButtonTextUnselected,
              ]}
            >
              배송
            </Text>
          </Pressable>
        </View>
        <View style={styles.faqListContainer}>
          <Text style={styles.faqSubjectTitleText}>{selectedSubject}</Text>
          {currentFaqItems.map((item, index) => (
            <Pressable key={index} style={styles.faqItemContainer}>
              <Text style={styles.faqItemQuestionText}>{item.question}</Text>
              <Ionicons name="chevron-forward" size={20} color="#EF7810" />
            </Pressable>
          ))}
        </View>

        <View style={styles.questionReqContainer}>
          <Text style={styles.questionReqText}>
            원하는 답변을 찾지 못하셨나요?
          </Text>
          <View style={styles.questionBtnContainer}>
            <TouchableOpacity style={styles.questionReqButton}>
              <Text
                style={styles.questionReqButtonText}
                onPress={() => router.navigate("/(cust)/questionReg")}
              >
                1:1 문의하기
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.questionListViewButton}>
              <Text
                style={styles.questionListViewText}
                onPress={() => router.navigate("/(cust)/question")}
              >
                내 문의 목록 보기
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {insets.bottom > 0 && (
        <View style={{ height: insets.bottom, backgroundColor: "#000" }} />
      )}
    </View>
  );
}
