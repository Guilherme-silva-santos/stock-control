import { FC, useState } from "react";
import { UserScreenTemplate } from "../userScreenTemplate";
import { StyleSheet, Text, View } from "react-native";
import { useSearchParams } from "expo-router/build/hooks";
import { useAddProducts } from "@/hooks/useAddProducts";
import { Button, Input } from "../../atoms";
import { colors, fontSizes, paddings } from "@/theme";

export const AddProductTemplate: FC = () => {
  const params = useSearchParams();
  const product = params.get("product");
  const { addProduct } = useAddProducts();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  console.log(product);
  return (
    <UserScreenTemplate canGoBack>
      <View style={s.container}>
        <Text style={s.title}>Cadastro de produtos</Text>
        <Text>Código de Barras: {product}</Text>
        <View style={s.formContainer}>
          <Input
            onChangeText={setName}
            label
            labelValue="Nome do produto"
            placeholder="Digite aqui..."
          />
          <Input
            keyboardType="numeric"
            onChangeText={setPrice}
            label
            labelValue="Preço do produto"
            placeholder="Digite aqui..."
          />
          <Input
            keyboardType="numeric"
            onChangeText={setQuantity}
            label
            labelValue="Valor do Produto"
            placeholder="Digite aqui..."
          />
        </View>
        <View style={{ justifyContent: "flex-end", flex: 1 }}>
          <Button
            onPress={() => addProduct(name, price, quantity, product!)}
            text="Adicionar produto"
          />
        </View>
      </View>
    </UserScreenTemplate>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: paddings.xl,
    gap: 16,
  },
  title: {
    textAlign: "center",
    fontSize: fontSizes.xxlarge,
    fontWeight: "bold",
  },
  formContainer: {
    gap: 8,
  },
});
