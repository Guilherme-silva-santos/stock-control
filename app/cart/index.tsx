import { AddProductModal } from "@/components/AddProductModal";
import { FindProductModal } from "@/components/FindProductModal";
import { useFindProductByBarCode } from "@/hooks/useFindProductByBarCode";
import { useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
export default function Cart() {
  const [permition, requestPermission] = useCameraPermissions();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenCamera = async () => {
    try {
      const { granted } = await requestPermission();
      setIsModalOpen(true);
      if (!granted) {
        return Alert.alert(
          "Permissão Negada",
          " Vocé precisa permitir o acesso a camera para usar o app."
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1, marginTop: 500 }}>
      {isModalOpen && (
        <FindProductModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      <TouchableOpacity style={{ backgroundColor: "yellow" }}>
        <Text onPress={handleOpenCamera}>Open Camera</Text>
      </TouchableOpacity>
      <Text>Cart</Text>
    </View>
  );
}
