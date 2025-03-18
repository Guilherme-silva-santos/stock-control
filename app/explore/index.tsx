import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useSearchParams } from "expo-router/build/hooks";
import { useAddProducts } from "@/hooks/useAddProducts";
import { useState } from "react";

export default function Explore() {
  const params = useSearchParams();
  const product = params.get("product");
  const { addProduct } = useAddProducts();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  console.log(product);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Text
        style={{
          color: "#808080",
        }}
      >
        Numero do código de barras {product}
      </Text>
      <TextInput
        onChangeText={setName}
        placeholder="Digite nome do produto"
        style={{ backgroundColor: "#808080" }}
      />
      <TextInput
        keyboardType="numeric"
        onChangeText={setPrice}
        placeholder="Digite o preco do produto"
        style={{ backgroundColor: "#808080" }}
      />
      <TextInput
        keyboardType="numeric"
        onChangeText={setQuantity}
        placeholder="Digite a quantidade do produto"
        style={{ backgroundColor: "#808080" }}
      />
      <TouchableOpacity
        style={{ backgroundColor: "#808080" }}
        onPress={() => addProduct(name, price, quantity, product!)}
      >
        <Text>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
