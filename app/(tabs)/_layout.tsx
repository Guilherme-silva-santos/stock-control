import { colors } from "@/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray[500],
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Produtos",
          tabBarIcon: ({ color }) => (
            <MaterialIcons color={color} size={20} name="home" />
          ),
        }}
      />
      <Tabs.Screen
        name="cart/index"
        options={{
          tabBarLabel: "Carrinho",
          tabBarIcon: ({ color }) => (
            <MaterialIcons color={color} size={20} name="shopping-cart" />
          ),
        }}
      />
      <Tabs.Screen name="(stack)" options={{ href: null }} />
    </Tabs>
  );
}
