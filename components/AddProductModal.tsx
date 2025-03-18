import { CameraView } from "expo-camera";
import { useRouter } from "expo-router";
import { FC, useState } from "react";
import { Modal, Text, TouchableOpacity } from "react-native";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
};
export const AddProductModal: FC<Props> = ({
  isModalOpen = false,
  setIsModalOpen,
}) => {
  const router = useRouter();
  const handleCodeScanned = (data: string) => {
    setIsModalOpen(false);
    console.log(data);

    router.push({
      pathname: "/explore",
      params: { product: data },
    });
  };

  return (
    <Modal visible={isModalOpen}>
      <CameraView
        facing="back"
        style={{ flex: 1 }}
        onBarcodeScanned={({ data }) => handleCodeScanned(data)}
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
