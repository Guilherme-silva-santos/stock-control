import { StyleSheet, View } from "react-native";
import { UserScreenTemplate } from "../userScreenTemplate";
import { paddings } from "@/theme";
import { useState } from "react";
import { useHandleOpenCamera } from "@/hooks/useHandleOpenCamera";
import { useFindProductByBarCode } from "@/hooks/useFindProductByBarCode";
import { BaseCameraModal } from "../../organism";
import { Button } from "../../atoms";

export const CardTemplate = () => {
  // o que fazer, quando escanear um produto fachar o modal e atualizar o estado de
  // produtos encontrado para azer um map colocando na tela os produtos já selecionados
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
    <UserScreenTemplate>
      <View style={s.container}>
        {isModalOpen && (
          <BaseCameraModal
            isModalOpen={isModalOpen}
            closeModal={() => setIsModalOpen(false)}
            onBarcodeScanned={({ data }) => handleScan(data)}
            facing="back"
          />
        )}
        <Button onPress={handleOpenCamera} text="Escanear Produto" />
      </View>
    </UserScreenTemplate>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: paddings.xl,
  },
});
