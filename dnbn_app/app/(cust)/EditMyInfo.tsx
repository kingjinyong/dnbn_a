import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Alert, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./editmyinfo.styles";
import { useState } from "react";

export default function EditMyInfoScreen() {
    const insets = useSafeAreaInsets();
    const [accountId, setAccountId] = useState("cust");
    const [phoneNumber, setPhoneNumber] = useState("02-123-4567");
    const [gender, setGender] = useState("male");

    // 비밀번호 변경 모달
    const [passwordModalStep, setPasswordModalStep] = useState<
        "none" | "verify" | "change" | "result"
    >("none");
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordChangeSuccess, setPasswordChangeSuccess] = useState(true);

    // 회원탈퇴 비밀번호 확인 모달
    const [withdrawPasswordModalVisible, setWithdrawPasswordModalVisible] = useState(false);
    const [withdrawPassword, setWithdrawPassword] = useState('');

    const handleVerifyPassword = () => {
        if (currentPassword === "") {
            alert("현재 비밀번호를 입력하세요.");
            return;
        }
        setPasswordModalStep("change");
    };

    const handleChangePassword = () => {
        if (newPassword === "" || confirmPassword === "") {
            alert("새 비밀번호를 입력하세요.");
            return;
        }
        if (newPassword !== confirmPassword) {
            alert("새 비밀번호가 일치하지 않습니다.");
            return;
        }
        console.log("비밀번호 변경:", { currentPassword, newPassword });
        setPasswordChangeSuccess(true);
        setPasswordModalStep("result");
    };

    const closePasswordModal = () => {
        setPasswordModalStep("none");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setPasswordChangeSuccess(false);
    };

    const handleWithdrawClick = () => {
        setWithdrawPasswordModalVisible(true);
    };

    const handleWithdrawPasswordSubmit = () => {
        if (!withdrawPassword.trim()) {
            Alert.alert('입력 오류', '비밀번호를 입력해주세요.');
            return;
        }
        // TODO: API를 통해 비밀번호 검증
        setWithdrawPasswordModalVisible(false);
        setWithdrawPassword('');
        router.push('/(cust)/Withdraw');
    };

    const handleUpdate = () => {
        console.log({
            accountId,
        });

        // 업데이트 로직 처리 후
        router.back();
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
                <Text style={styles.title}>
                    내 정보 수정
                </Text>
                <View style={styles.placeholder} />
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* 계정 정보 섹션 */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="person-circle" size={22} color="#EF7810" />
                        <Text style={styles.sectionTitle}>계정 정보</Text>
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>계정 아이디</Text>
                        <TextInput
                            style={[styles.input, styles.inputDisabled]}
                            value={accountId}
                            editable={false}
                        />
                        <Text style={styles.helpText}>아이디는 변경할 수 없습니다</Text>
                    </View>

                    <TouchableOpacity
                        style={styles.passwordChangeButton}
                        onPress={() => setPasswordModalStep("verify")}
                    >
                        <Ionicons name="lock-closed" size={18} color="#EF7810" />
                        <Text style={styles.passwordChangeButtonText}>비밀번호 변경</Text>
                    </TouchableOpacity>
                </View>

                {/* 사용자 정보수정 */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="information-circle" size={22} color="#EF7810" />
                        <Text style={styles.sectionTitle}>개인 정보</Text>
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>전화번호</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="전화번호를 입력하세요"
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                            keyboardType="phone-pad"
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>성별</Text>
                        <View style={styles.genderContainer}>
                            <TouchableOpacity
                                style={[
                                    styles.genderButton,
                                    gender === 'male' && styles.genderButtonActive,
                                ]}
                                onPress={() => setGender('male')}
                            >
                                <Ionicons name="male" size={18} color={gender === 'male' ? '#fff' : '#EF7810'} />
                                <Text style={[styles.genderButtonText, gender === 'male' && styles.genderButtonTextActive,]}>
                                    남성
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.genderButton, gender === 'female' && styles.genderButtonActive,]}
                                onPress={() => setGender('female')}
                            >
                                <Ionicons name="female" size={18} color={gender === 'female' ? '#fff' : '#EF7810'} />
                                <Text style={[styles.genderButtonText, gender === 'female' && styles.genderButtonTextActive,]}>
                                    여성
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={styles.submitButton} onPress={handleUpdate}>
                    <Text style={styles.submitButtonText}>수정 완료</Text>
                </TouchableOpacity>

                <View style={styles.WithdrawContainer}>
                    <TouchableOpacity onPress={handleWithdrawClick}>
                        <Text style={styles.WithdrawText}>회원 탈퇴</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* 비밀번호 변경 모달 */}
            <Modal
                visible={passwordModalStep !== "none"}
                transparent={true}
                animationType="fade"
                onRequestClose={closePasswordModal}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        {passwordModalStep === "verify" && (
                            <>
                                <View style={styles.modalHeader}>
                                    <Ionicons name="lock-closed" size={28} color="#EF7810" />
                                    <Text style={styles.modalTitle}>비밀번호 확인</Text>
                                </View>

                                <Text style={styles.modalDescription}>
                                    비밀번호 변경을 위해 현재 비밀번호를 입력해주세요
                                </Text>

                                <View style={styles.modalInputGroup}>
                                    <Text style={styles.modalLabel}>현재 비밀번호</Text>
                                    <TextInput
                                        style={styles.modalInput}
                                        placeholder="현재 비밀번호를 입력하세요"
                                        value={currentPassword}
                                        onChangeText={setCurrentPassword}
                                        secureTextEntry
                                        autoFocus
                                    />
                                </View>

                                <View style={styles.modalButtons}>
                                    <TouchableOpacity
                                        style={styles.modalConfirmButton}
                                        onPress={handleVerifyPassword}
                                    >
                                        <Text style={styles.modalConfirmButtonText}>확인</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.modalCancelButton}
                                        onPress={closePasswordModal}
                                    >
                                        <Text style={styles.modalCancelButtonText}>취소</Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )}

                        {passwordModalStep === "change" && (
                            <>
                                <View style={styles.modalHeader}>
                                    <Ionicons name="key" size={28} color="#EF7810" />
                                    <Text style={styles.modalTitle}>새 비밀번호 설정</Text>
                                </View>

                                <Text style={styles.modalDescription}>
                                    새로운 비밀번호를 입력해주세요
                                </Text>

                                <View style={styles.modalInputGroup}>
                                    <Text style={styles.modalLabel}>새 비밀번호</Text>
                                    <TextInput
                                        style={styles.modalInput}
                                        placeholder="새 비밀번호를 입력하세요"
                                        value={newPassword}
                                        onChangeText={setNewPassword}
                                        secureTextEntry
                                        autoFocus
                                    />
                                </View>

                                <View style={styles.modalInputGroup}>
                                    <Text style={styles.modalLabel}>새 비밀번호 확인</Text>
                                    <TextInput
                                        style={styles.modalInput}
                                        placeholder="새 비밀번호를 다시 입력하세요"
                                        value={confirmPassword}
                                        onChangeText={setConfirmPassword}
                                        secureTextEntry
                                    />
                                </View>

                                <View style={styles.modalButtons}>
                                    <TouchableOpacity
                                        style={styles.modalConfirmButton}
                                        onPress={handleChangePassword}
                                    >
                                        <Text style={styles.modalConfirmButtonText}>변경</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.modalCancelButton}
                                        onPress={closePasswordModal}
                                    >
                                        <Text style={styles.modalCancelButtonText}>취소</Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )}

                        {passwordModalStep === "result" && (
                            <>
                                <View style={styles.modalHeader}>
                                    <Ionicons
                                        name={
                                            passwordChangeSuccess
                                                ? "checkmark-circle"
                                                : "close-circle"
                                        }
                                        size={48}
                                        color={passwordChangeSuccess ? "#ef7810" : "#ef4444"}
                                    />
                                </View>

                                <Text style={styles.modalResultTitle}>
                                    {passwordChangeSuccess
                                        ? "비밀번호 변경 완료"
                                        : "비밀번호 변경 실패"}
                                </Text>

                                <Text style={styles.modalDescription}>
                                    {passwordChangeSuccess
                                        ? "비밀번호가 성공적으로 변경되었습니다."
                                        : "비밀번호 변경 중 오류가 발생했습니다. 다시 시도해주세요."}
                                </Text>

                                <TouchableOpacity
                                    style={styles.modalSingleButton}
                                    onPress={closePasswordModal}
                                >
                                    <Text style={styles.modalSingleButtonText}>확인</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </View>
                </View>
            </Modal>

            {/* 회원탈퇴 비밀번호 확인 모달 */}
            <Modal
                visible={withdrawPasswordModalVisible}
                transparent
                animationType="fade"
                onRequestClose={() => setWithdrawPasswordModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.passwordModal}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>비밀번호 확인</Text>
                        </View>

                        <View style={styles.modalContent}>
                            <Text style={styles.modalDescription}>
                                회원 탈퇴를 위해 비밀번호를 입력해주세요.
                            </Text>
                            <TextInput
                                style={styles.passwordInput}
                                placeholder="비밀번호"
                                placeholderTextColor="#ccc"
                                value={withdrawPassword}
                                onChangeText={setWithdrawPassword}
                                secureTextEntry
                            />
                        </View>

                        <View style={styles.modalButtonContainer}>
                            <TouchableOpacity
                                style={styles.modalSubmitButton}
                                onPress={handleWithdrawPasswordSubmit}
                            >
                                <Text style={styles.modalSubmitButtonText}>확인</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.modalCancelButton}
                                onPress={() => {
                                    setWithdrawPasswordModalVisible(false);
                                    setWithdrawPassword('');
                                }}
                            >
                                <Text style={styles.modalCancelButtonText}>취소</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            {insets.bottom > 0 && (
                <View style={{ height: insets.bottom, backgroundColor: "#000" }} />
            )}
        </View>

    );
}