import { FC, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { useHandleOpenCamera } from "@/hooks/useHandleOpenCamera";
import { useFetchProducts } from "@/hooks/useFetchProducts";
import { BaseCameraModal, ProductCard } from "../../organism";
import { FloatButton, IconButton } from "../../atoms";
import { colors, fontSizes, paddings } from "@/theme";
import { UserScreenTemplate } from "../userScreenTemplate";

export const HomeTemplate: FC = () => {
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
      pathname: "/cart",
      params: { product: data },
    });
  };

  return (
    <UserScreenTemplate>
      <ScrollView
        style={s.container}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <View style={{ gap: 16 }}>
          {isModalOpen && (
            <BaseCameraModal
              facing="back"
              onBarcodeScanned={({ data }) => handleCodeScanned(data)}
              isModalOpen={isModalOpen}
              closeModal={() => setIsModalOpen(false)}
            />
          )}
          <View style={s.listHeader}>
            <Text style={s.listHeaderTitle}>Listagem de Produtos</Text>
            <IconButton
              iconSize={24}
              iconColor={colors.gray[900]}
              variant="default"
              iconName="filter-list"
              color={colors.gray[200]}
              size={40}
            />
          </View>
          <View style={{ gap: 8 }}>
            {loading ? (
              <View style={s.loadingContainer}>
                <Text
                  style={{
                    fontSize: fontSizes.large,
                    fontWeight: "bold",
                    color: colors.gray[900],
                  }}
                >
                  Carregando Produtos...
                </Text>
                <ActivityIndicator size={"large"} />
              </View>
            ) : (
              products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))
            )}
          </View>
        </View>
      </ScrollView>
      <FloatButton
        iconName="post-add"
        iconSize={24}
        iconColor={colors.gray[900]}
        onPress={handleOpenCamera}
      />
    </UserScreenTemplate>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: paddings.xl,
  },
  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listHeaderTitle: {
    fontSize: fontSizes.xlarge,
    fontWeight: "bold",
    color: colors.gray[900],
    fontFamily: "Inter_700",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
