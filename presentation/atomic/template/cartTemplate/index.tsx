import { ScrollView, StyleSheet, Text, View } from "react-native";
import { UserScreenTemplate } from "../userScreenTemplate";
import { fontSizes, paddings } from "@/theme";
import { useRef, useState } from "react";
import { useHandleOpenCamera } from "@/hooks/useHandleOpenCamera";
import { useFindProductByBarCode } from "@/hooks/useFindProductByBarCode";
import { BaseCameraModal, ProductCard } from "../../organism";
import { FloatButton } from "../../atoms";
import { DocumentData } from "firebase/firestore";

export const CartTemplate = () => {
  const isScanning = useRef(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { handleOpenCamera } = useHandleOpenCamera({
    setModalOpen: setIsModalOpen,
  });
  const [scannedProducts, setScannedProducts] = useState<DocumentData[]>([]);
  const { findProductsByBarCode } = useFindProductByBarCode();
  const sum = scannedProducts.reduce((acc, product) => acc + product.price, 0);
  const [quantityProducts, setQuantityProducts] = useState<number>(0);

  const total = Number(sum.toFixed(2));

  const handleScannedCode = async (barcode: string) => {
    const product = await findProductsByBarCode(barcode);
    if (isScanning.current) return;
    isScanning.current = true;

    setTimeout(() => (isScanning.current = false), 2000);

    if (product) {
      setIsModalOpen(false);
      setScannedProducts((prevProducts) => [...prevProducts, product]);

      console.log("Produto encontrado:", scannedProducts);
    } else {
      console.log("Produto não encontrado.");
    }
  };

  return (
    <UserScreenTemplate>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}>
        <View style={s.container}>
          <Text
            style={{
              fontSize: fontSizes.xxlarge,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Produtos escaneados
          </Text>

          <View style={{ gap: 8 }}>
            {scannedProducts.map((product) => (
              <ProductCard
                key={product.name}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
                onButtonPress={() => console.log("Editar produto")}
                hasStepper
              />
            ))}
          </View>
          {isModalOpen && (
            <BaseCameraModal
              isModalOpen={isModalOpen}
              closeModal={() => setIsModalOpen(false)}
              onBarcodeScanned={({ data }) => handleScannedCode(data)}
              facing="back"
            />
          )}
          <Text>{total}</Text>
          <Text>{quantityProducts}</Text>
        </View>
      </ScrollView>
      <FloatButton
        iconName="qr-code"
        iconSize={24}
        onPress={handleOpenCamera}
      />
    </UserScreenTemplate>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: paddings.xl,
    gap: 16,
  },
});
