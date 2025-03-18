import { useFindProductByBarCode } from "@/hooks/useFindProductByBarCode";
import { CameraView } from "expo-camera";
import { useRouter } from "expo-router";
import { FC, useState } from "react";
import { Modal, Text, TouchableOpacity } from "react-native";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
};
export const FindProductModal: FC<Props> = ({
  isModalOpen = false,
  setIsModalOpen,
}) => {
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
    <Modal visible={isModalOpen}>
      <CameraView
        facing="back"
        style={{ flex: 1 }}
        onBarcodeScanned={({ data }) => handleScan(data)}
      >
        <TouchableOpacity
          style={{ backgroundColor: "red" }}
          onPress={() => setIsModalOpen(false)}
        >
          <Text>Fechar</Text>
        </TouchableOpacity>
      </CameraView>
    </Modal>
  );
};
