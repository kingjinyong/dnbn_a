import { Stack } from "expo-router";

export default function CustLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* 탭이 있는 메인 화면 */}
      <Stack.Screen
        name="tabs"
        options={{
          headerShown: false,
        }}
      />

      {/* 탭이 없는 추가 화면들 */}
      <Stack.Screen
        name="cart"
        options={{
          title: "장바구니",
          headerShown: false,
          headerTitle: "장바구니",
        }}
      />
      <Stack.Screen
        name="notifications"
        options={{
          title: "알림",
          headerShown: false,
          headerTitle: "알림",
        }}
      />
      <Stack.Screen
        name="address"
        options={{
          title: "주소 관리",
          headerShown: false,
          headerTitle: "배송지 관리",
        }}
      />
      <Stack.Screen
        name="address-select"
        options={{
          title: "주소 선택",
          headerShown: false,
          headerTitle: "주소 선택",
        }}
      />
      <Stack.Screen
        name="review"
        options={{
          title: "리뷰 작성",
          headerShown: false,
          headerTitle: "리뷰 작성",
        }}
      />
    </Stack>
  );
}
