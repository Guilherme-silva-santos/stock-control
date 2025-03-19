import { useFindProductByBarCode } from "@/hooks/useFindProductByBarCode";
import { useHandleOpenCamera } from "@/hooks/useHandleOpenCamera";
import { BaseCameraModal } from "@/presentation/atomic/organism";

import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
export default function Cart() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { handleOpenCamera } = useHandleOpenCamera({
    setModalOpen: setIsModalOpen,
  });

  const { findProductsByBarCode } = useFindProductByBarCode();
  const handleScan = async (barcode: string) => {
    const product = await findProductsByBarCode(barcode);
    if (product) {
      setIsModalOpen(false);
      console.log("Produto encontrado:", product);
    } else {
      console.log("Produto não encontrado.");
    }
  };

  return (
    <View style={{ flex: 1, marginTop: 500 }}>
      {isModalOpen && (
        <BaseCameraModal
          isModalOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          onBarcodeScanned={({ data }) => handleScan(data)}
          facing="back"
        />
      )}
      <TouchableOpacity style={{ backgroundColor: "yellow" }}>
        <Text onPress={handleOpenCamera}>Open Camera</Text>
      </TouchableOpacity>
      <Text>Cart</Text>
    </View>
  );
}
