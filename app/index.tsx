import { AddProductModal } from "@/components/AddProductModal";
import { useFetchProducts } from "@/hooks/useFetchProducts";
import { useCameraPermissions } from "expo-camera";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const [permition, requestPermission] = useCameraPermissions();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { products, loading } = useFetchProducts();
  console.log(products);

  const handleOpenCamera = async () => {
    try {
      const { granted } = await requestPermission();
      setIsModalOpen(true);
      if (!granted) {
        return Alert.alert(
          "Permissão Negada",
          "Você precisa permitir o acesso a camera para usar o app."
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        padding: 80,
      }}
    >
      {isModalOpen && (
        <AddProductModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}

      <TouchableOpacity onPress={handleOpenCamera}>
        <Text>add</Text>
      </TouchableOpacity>
      <FlatList
        keyExtractor={(item) => item.id}
        data={products}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Text>{item.quantity}</Text>
          </View>
        )}
      />
      <TouchableOpacity
        style={{ marginTop: 20, backgroundColor: "blue" }}
        onPress={() => {
          router.push("/cart");
        }}
      >
        <Text>add</Text>
      </TouchableOpacity>
    </View>
  );
}
