import Postcode from "@actbase/react-daum-postcode";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useCallback, useState } from "react";
import {
  Alert,
  FlatList,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./address.styles";

export default function AddressScreen() {
  const insets = useSafeAreaInsets();

  const [showAddressSearch, setShowAddressSearch] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(
    null
  );

  const [addr, setAddr] = useState([
    {
      id: "1",
      label: "집",
      details: "경기도 수원시 영통구 월드컵로 123",
      recipient: "홍길동",
      phone: "010-1234-5678",
      isDefault: true,
    },
    {
      id: "2",
      label: "회사",
      details: "경기도 성남시 분당구 판교로 456",
      recipient: "김철수",
      phone: "010-8765-4321",
      isDefault: false,
    },
    {
      id: "3",
      label: "부모님 댁",
      details: "경기도 성남시 분당구 판교로 456",
      recipient: "김철수",
      phone: "010-8765-4321",
      isDefault: false,
    },
  ]);

  // 주소 검색 모달 열기
  const handleOpenAddressSearch = useCallback(() => {
    setShowAddressSearch(true);
  }, []);

  // 주소 선택 처리
  const handleAddressSelect = useCallback((data: any) => {
    const address = data.roadAddress || data.address;
    setShowAddressSearch(false);
    // 여기서 추가적인 처리 (예: 주소를 서버에 저장)
    console.log("선택된 주소:", address);
  }, []);

  // 기본 주소지 변경 확인 모달 열기
  const handleOpenConfirmModal = useCallback(
    (selectedId: string) => {
      const selectedAddress = addr.find((item) => item.id === selectedId);
      if (selectedAddress?.isDefault) {
        // 이미 기본 주소지인 경우 모달 열지 않음
        return;
      }
      setSelectedAddressId(selectedId);
      setShowConfirmModal(true);
    },
    [addr]
  );

  // 기본 주소지 설정
  const handleSetDefaultAddress = useCallback(() => {
    if (selectedAddressId) {
      setAddr((prevAddr) =>
        prevAddr.map((item) => ({
          ...item,
          isDefault: item.id === selectedAddressId,
        }))
      );
    }
    setShowConfirmModal(false);
    setSelectedAddressId(null);
  }, [selectedAddressId]);

  // 모달 취소
  const handleCancelModal = useCallback(() => {
    setShowConfirmModal(false);
    setSelectedAddressId(null);
  }, []);

  return (
    <View style={styles.container}>
      {insets.top > 0 && (
        <View style={{ height: insets.top, backgroundColor: "#FFFFFF" }} />
      )}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.navigate("/(cust)/tabs/custhome")}
        >
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>내 위치 설정</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.locationSettingContainer}>
        {addr.length < 3 ? (
          <View style={styles.infoBox}>
            <Ionicons
              name="information-circle-outline"
              size={18}
              color="#EF7810"
            />
            <Text style={{ color: "#ef7810" }}>
              최대 3개의 주소를 저장할 수 있습니다.
            </Text>
          </View>
        ) : (
          <View style={styles.infoBox}>
            <Ionicons
              name="information-circle-outline"
              size={18}
              color="#EF7810"
            />
            <Text style={{ color: "#ef7810" }}>
              더 이상 주소를 추가할 수 없습니다.
            </Text>
          </View>
        )}

        <FlatList
          data={[...addr].sort(
            (a, b) => (b.isDefault ? 1 : 0) - (a.isDefault ? 1 : 0)
          )}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.listItem,
                item.isDefault && { borderColor: "#EF7810", borderWidth: 1 },
              ]}
            >
              <View style={styles.contentContainer}>
                <View style={styles.itemHeader}>
                  <View style={styles.itemTitleContainer}>
                    <Text style={styles.itemText}>{item.label}</Text>

                    {item.isDefault && (
                      <View style={styles.defaultAddressContainer}>
                        <Text style={styles.defaultAddress}>기본 주소지</Text>
                      </View>
                    )}
                  </View>

                  <Pressable
                    style={
                      item.isDefault ? styles.selectButton : styles.unSelectButton}
                    onPress={() => handleOpenConfirmModal(item.id)}>
                    <Text
                      style={
                        item.isDefault ? styles.selectText : styles.unselectText
                      }
                    >
                      {item.isDefault === true ? "선택됨" : "선택"}
                    </Text>
                  </Pressable>
                </View>

                <View>
                  <Text style={styles.itemDetailText}>{item.details}</Text>
                </View>

                <View style={styles.itemRecipientContainer}>
                  <Text style={styles.itemDetailText}>
                    {item.recipient} {item.phone}
                  </Text>

                  <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.editButton}>
                      <Text style={styles.editButtonText}>수정</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.removeButton}>
                      <Text style={styles.removeButtonText}>삭제</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )}
        />

        <TouchableOpacity
          style={[styles.addButton, addr.length >= 3 && { display: "none" }]}
          onPress={handleOpenAddressSearch}
        >
          <Ionicons name="add" size={24} color="#EF7810" />
          <Text style={styles.addButtonText}>새 주소 추가</Text>
        </TouchableOpacity>
      </View>

      {/* 주소 검색 모달 */}
      <Modal
        visible={showAddressSearch}
        animationType="slide"
        onRequestClose={() => setShowAddressSearch(false)}
      >
        {insets.top > 0 && (
          <View style={{ height: insets.top, backgroundColor: "#fff" }} />
        )}
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setShowAddressSearch(false)}
            >
              <Ionicons name="close" size={28} color="#000" />
            </TouchableOpacity>

            <Text style={styles.modalTitle}>주소 검색</Text>

            <View style={styles.modalEmptyView} />
          </View>

          <Postcode
            style={styles.postcodeStyle}
            onSelected={handleAddressSelect}
            onError={(error) => {
              Alert.alert("오류", "주소 검색 중 오류가 발생했습니다.");
            }}
          />
        </View>
      </Modal>

      {/* 기본 주소지 변경 확인 모달 */}
      <Modal
        visible={showConfirmModal}
        transparent={true} 
        animationType="fade"
        onRequestClose={handleCancelModal}
      >
        <View style={styles.confirmModalOverlay}>
          <View style={styles.confirmModalContainer}>
            <Text style={styles.confirmModalTitle}>기본 주소지 변경</Text>
            
            <Text style={styles.confirmModalMessage}>
              기본 주소지로 변경하시겠습니까?
            </Text>
            
            <View style={styles.confirmModalButtons}>
              <TouchableOpacity
                style={[styles.confirmModalButton, styles.confirmButton]}
                onPress={handleSetDefaultAddress}
              >
                <Text style={styles.confirmButtonText}>변경</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[styles.confirmModalButton, styles.cancelButton]}
                onPress={handleCancelModal}
              >
                <Text style={styles.cancelButtonText}>취소</Text>
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
