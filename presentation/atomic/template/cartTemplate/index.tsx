import { Modal, ScrollView, StyleSheet, Text, View } from "react-native";
import { UserScreenTemplate } from "../userScreenTemplate";
import { fontSizes, paddings } from "@/theme";
import { useRef, useState } from "react";
import { useHandleOpenCamera } from "@/hooks/useHandleOpenCamera";
import { useFindProductByBarCode } from "@/hooks/useFindProductByBarCode";
import { BaseCameraModal, CartTotalFooter, ProductCard } from "../../organism";
import { Button, FloatButton } from "../../atoms";
import { DocumentData } from "firebase/firestore";

export const CartTemplate = () => {
  const isScanning = useRef(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOrderOpen, setIsModalOrderOpen] = useState(false);
  const { handleOpenCamera } = useHandleOpenCamera({
    setModalOpen: setIsModalOpen,
  });
  const [scannedProducts, setScannedProducts] = useState<DocumentData[]>([]);
  const { findProductsByBarCode } = useFindProductByBarCode();
  const sum = scannedProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const total = Number(sum.toFixed(2));

  const completeOrder = () => {
    setIsModalOrderOpen(true);
    setScannedProducts([]);
  };

  const handleScannedCode = async (barcode: string) => {
    const product = await findProductsByBarCode(barcode);
    console.log("Produto encontrado:", product);
    if (isScanning.current) return;
    isScanning.current = true;

    setTimeout(() => (isScanning.current = false), 2000);

    if (product) {
      setIsModalOpen(false);
      setScannedProducts((prevProducts) => {
        const existingProduct = prevProducts.find(
          (p) => p.barcode === product.barcode
        );
        if (existingProduct) {
          return prevProducts.map((p) =>
            p.barcode === product.barcode
              ? { ...p, quantity: p.quantity + 1 }
              : p
          );
        }

        return [...prevProducts, { ...product, quantity: 1 }];
      });
    } else {
      console.log("Produto nao encontrado");
    }
  };

  return (
    <UserScreenTemplate>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
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
                key={product.barcode}
                name={product.name}
                price={product.price}
                onButtonPress={() => console.log("Editar produto")}
                quantity={product.quantity}
                onQuantityChange={(newQuantity) =>
                  setScannedProducts((prev) =>
                    prev.map((p) =>
                      p.barcode === product.barcode
                        ? { ...p, quantity: newQuantity }
                        : p
                    )
                  )
                }
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
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <CartTotalFooter total={total} />
            <Button text="Finalizar compra" onPress={completeOrder} />
          </View>
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
