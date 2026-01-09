import Ionicons from "@expo/vector-icons/build/Ionicons";
import { router } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./storeproducts.styles";

export default function StoreProducts() {
  const insets = useSafeAreaInsets();

  const products = [
    { id: "1", uri: require("@/assets/images/image1.jpg"), name: "상품 1", price: 10000, categoryName: "카테고리 1"},
    { id: "2", uri: require("@/assets/images/image1.jpg"), name: "상품 2", price: 20000, categoryName: "카테고리 2"},
    { id: "3", uri: require("@/assets/images/image1.jpg"), name: "상품 3", price: 30000, categoryName: "카테고리 3"},
  ];

  return (
    <View style={styles.container}>
      {insets.top > 0 && (
        <View style={{ height: insets.top, backgroundColor: "#ffffff" }} />
      )}

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title} pointerEvents="none">
          상품 관리
        </Text>
        <View style={styles.placeholder} />
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: products }) => (
          <View style={styles.content}>
            <TouchableOpacity style={styles.productTouchable}>
              <View style={styles.productContainer}>
                <View style={styles.productImageContainer}>
                  <Image source={products.uri} style={styles.productImage} resizeMode="cover"/>
                </View>
                <View style={styles.productInfoContainer}>
                  <Text style={styles.categoryName}>{products.categoryName}</Text>
                  <Text style={styles.productName}>{products.name}</Text>
                  <Text style={styles.price}>
                    {products.price.toLocaleString()}원
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <View style={styles.productButtonContainer}>
              <TouchableOpacity style={styles.saleButton}>
                <Text style={styles.saleButtonText}>할인 등록</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.negoButton}>
                <Text style={styles.negoButtonText}>네고 등록</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.moreButton}>
                <Text><Ionicons name="ellipsis-horizontal" size={20} color="#666" /></Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      ></FlatList>

      <TouchableOpacity
        onPress={() => router.navigate("/(store)/addproduct")}
      >
        <View style={styles.addProductButton}>
          <Ionicons name="add" size={24} color="#ef7810" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
