import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./reportdetail.styles";
import { router } from "expo-router";

export default function ReportDetailScreen() {
    const insets = useSafeAreaInsets();

    const report = {
        id: "1",
        type: "가맹점",
        title: "부적절한 내용 신고",
        status: "답변완료",
        date: "2024-06-10",
        description: "해당 가맹점의 상품 설명이 부정확하고 고객을 기만하는 내용이 포함되어 있습니다.",
        answer: "신고하신 내용에 대해 검토 후 해당 가맹점에 조치를 취했습니다. 감사합니다.",
        images: [
            require('@/assets/images/icon.png'),
            require('@/assets/images/icon.png'),
            require('@/assets/images/icon.png')
        ]
    };

    return (
        <View style={styles.container}>
            {insets.top > 0 && (
                <View style={{ height: insets.top, backgroundColor: "#fff" }} />
            )}
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => router.back()}
                >
                    <Ionicons name="chevron-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.title}>신고상세</Text>
                <View style={styles.placeholder} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.contentWrapper}>
                    {/* 신고 제목 */}
                    <Text style={styles.reportTitle}>
                        {report.title}
                    </Text>

                    {/* 신고 정보 */}
                    <View style={styles.reportInfoContainer}>
                        <View>
                            <Text style={styles.reportInfoLabel}>신고유형</Text>
                            <Text style={styles.reportInfoValue}>
                                {report.type}
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.reportInfoLabel}>신고일시</Text>
                            <Text style={styles.reportInfoValue}>
                                {report.date}
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.reportInfoLabel}>처리상태</Text>
                            <View style={styles.statusBadge}>
                                <Text style={styles.statusText}>
                                    {report.status}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* 신고 내용 */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>
                            신고 내용
                        </Text>
                        <View style={styles.descriptionBox}>
                            <Text style={styles.descriptionText}>
                                {report.description}
                            </Text>
                        </View>
                    </View>

                    {/* 첨부 이미지 */}
                    {report.images.length > 0 && (
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>
                                첨부 이미지
                            </Text>
                            <View style={styles.imageContainer}>
                                {report.images.map((image, index) => (
                                    <View key={index} style={styles.imageWrapper}>
                                        <Image
                                            source={image}
                                            style={styles.image}
                                            resizeMode="cover"
                                        />
                                    </View>
                                ))}
                            </View>
                        </View>
                    )}

                    {/* 처리 답변 */}
                    <View>
                        <Text style={styles.sectionTitle}>
                            처리 결과
                        </Text>
                        <View style={styles.answerBox}>
                            <Text style={styles.answerDate}>답변일: {report.date}</Text>
                            <Text style={styles.answerText}>
                                {report.answer}
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {insets.bottom > 0 && (
                <View style={{ height: insets.bottom, backgroundColor: "#fff" }} />
            )}
        </View>
    );
}