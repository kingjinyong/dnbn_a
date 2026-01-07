import { router } from "expo-router";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./review.styles";
import React from "react";

export default function CustReviewListScreen() {
  const [selectedTab, setSelectedTab] = React.useState<"written" | "unwritten">(
    "written"
  );

  const writtenReviews = [
    {
      id: "1",
      uri: require("@/assets/images/logo.png"),
      store: "매장 A",
      rating: 5,
      comment: "정말 맛있었어요!",
    },
    {
      id: "2",
      uri: require("@/assets/images/image1.jpg"),
      store: "매장 B",
      rating: 4,
      comment: "서비스가 좋았어요.",
    },
  ];

  const unwrittenReviews = [
    { id: "3", store: "매장 C", orderDate: "2024-06-10" },
    { id: "4", store: "매장 D", orderDate: "2024-06-12" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title} pointerEvents="none">
          리뷰
        </Text>
        <View style={styles.placeholder} />
      </View>
      <View style={styles.topnav}>
        <TouchableOpacity 
          style={[
            styles.topNavTab, 
            selectedTab === "written" && { borderBottomWidth: 1, borderBottomColor: "#FF6B35" },
            selectedTab === "unwritten" && { borderBottomWidth: 1, borderBottomColor: "#ccc" }
          ]}
          onPress={() => setSelectedTab("written")}
        >
          <Text style={styles.topnavText}>
            작성 리뷰
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[
            styles.topNavTab,
            selectedTab === "unwritten" && { borderBottomWidth: 1, borderBottomColor: "#FF6B35" },
            selectedTab === "written" && { borderBottomWidth: 1, borderBottomColor: "#ccc" }
          ]}
          onPress={() => setSelectedTab("unwritten")}
        >
          <Text style={styles.topnavText}>
            미작성 리뷰
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.reviewContainer}>
        <FlatList
          data={selectedTab === "written" ? writtenReviews : unwrittenReviews}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={{
                padding: 15,
                borderBottomWidth: 1,
                borderBottomColor: "#eee",
              }}
            >
              {selectedTab === "written" ? (
                <View style={{ flexDirection: "row" }}>
                  {/* 사진 */}
                  <Image 
                    source={item.uri} 
                    style={{ width: 60, height: 60, borderRadius: 8, marginRight: 15 }}
                    resizeMode="cover"
                  />
                  
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>
                      {item.store}
                    </Text>
                    <Text style={{ fontSize: 14, color: "#555", marginBottom: 5 }}>
                      평점: {item.rating}점 ⭐
                    </Text>
                    <Text style={{ fontSize: 14, color: "#333", lineHeight: 20 }}>
                      {item.comment}
                    </Text>
                  </View>
                </View>
              ) : (
                <>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    {item.store}
                  </Text>
                  <Text style={{ fontSize: 14, color: "#555", marginTop: 5 }}>
                    주문일: {item.orderDate}
                  </Text>
                </>
              )}
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}
