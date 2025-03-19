import { useFetchProducts } from "@/hooks/useFetchProducts";
import { useHandleOpenCamera } from "@/hooks/useHandleOpenCamera";
import { BaseCameraModal, ProductCard } from "@/presentation/atomic/organism";

import { colors, paddings } from "@/theme";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { products, loading } = useFetchProducts();
  const { handleOpenCamera } = useHandleOpenCamera({
    setModalOpen: setIsModalOpen,
  });
  console.log(products);

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
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: paddings.lg,
      }}
    >
      {isModalOpen && (
        <BaseCameraModal
          facing="back"
          onBarcodeScanned={({ data }) => handleCodeScanned(data)}
          isModalOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
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
      <ProductCard />
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
