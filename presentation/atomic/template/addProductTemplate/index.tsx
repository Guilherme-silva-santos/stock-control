import { FC } from "react";
import { UserScreenTemplate } from "../userScreenTemplate";
import { StyleSheet, Text, View } from "react-native";
import { useSearchParams } from "expo-router/build/hooks";
import { useAddProducts } from "@/hooks/useAddProducts";
import { Button, Input } from "../../atoms";
import { colors, fontSizes, paddings } from "@/theme";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const AddProductTemplate: FC = () => {
  const params = useSearchParams();
  const product = params.get("product");
  const { addProduct } = useAddProducts();
  const schema = z.object({
    name: z
      .string()
      .min(2, "Nome do produto deve conter pelo menos um caractere."),
    price: z.coerce
      .number()
      .min(1, "O preço deve ser maior que zero e separado por ponto")
      .refine((val) => !Number.isNaN(val), {
        message:
          "Digite um valor numérico válido, usando ponto (.) como separador decimal",
      }),
  });

  const { control, handleSubmit, getValues, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
    },
  });

  const handleOnSubmit = () => {
    const { name, price } = getValues();
    addProduct(name, price, product!);
    reset();
  };
  return (
    <UserScreenTemplate canGoBack>
      <View style={s.container}>
        <Text style={s.title}>Cadastro de produtos</Text>
        <Text>Código de Barras: {product}</Text>
        <View style={s.formContainer}>
          <Controller
            name="name"
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <>
                <Input
                  onChangeText={onChange}
                  label
                  labelValue="Nome do produto *"
                  placeholder="Digite aqui..."
                  onBlur={onBlur}
                  value={value}
                />
                {error && (
                  <Text style={{ color: colors.red }}>{error.message}</Text>
                )}
              </>
            )}
            control={control}
            rules={{ required: true }}
          />
          <Controller
            name="price"
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <>
                <Input
                  onChangeText={onChange}
                  label
                  labelValue="Preço do produto  *"
                  placeholder="Digite aqui..."
                  onBlur={onBlur}
                  keyboardType="numeric"
                  value={value !== undefined ? String(value) : ""}
                />
                {error && (
                  <Text style={{ color: colors.red }}>
                    O número de conter um separador por (.)
                  </Text>
                )}
              </>
            )}
            control={control}
            rules={{ required: true }}
          />
        </View>
        <View style={{ justifyContent: "flex-end", flex: 1 }}>
          <Button
            onPress={handleSubmit(handleOnSubmit)}
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
