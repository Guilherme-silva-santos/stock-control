import { FC, useEffect, useState } from "react";
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
import { BaseCameraModal, EditProductModal, ProductCard } from "../../organism";
import { FloatButton, IconButton } from "../../atoms";
import { colors, fontSizes, paddings } from "@/theme";
import { UserScreenTemplate } from "../userScreenTemplate";
import { useUpdateProduct } from "@/hooks/useUpdateProduct";
import { FilterForm } from "../../organism/filterForm";

type Product = {
  id: string;
  name: string;
  price: number;
};
export const HomeTemplate: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [newPrice, setNewPrice] = useState<number>(0);
  const [filterVisible, setFilterVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const { updateProduct } = useUpdateProduct();
  const { products, loading, refetch } = useFetchProducts();
  const { handleOpenCamera } = useHandleOpenCamera({
    setModalOpen: setIsModalOpen,
  });
  const router = useRouter();

  useEffect(() => {
    const data = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(data);
  }, [searchText, products]);

  const handleCodeScanned = (data: string) => {
    setIsModalOpen(false);
    console.log(data);

    router.push({
      pathname: "/addProducts",
      params: { product: data },
    });
  };

  const handleUdatePrice = async () => {
    if (!selectedProduct) return;
    await updateProduct(selectedProduct.id, newPrice);

    refetch();
    setIsEditModalOpen(false);
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
              iconName="search"
              color={colors.gray[200]}
              size={40}
              onPress={() => {
                if (filterVisible) {
                  setFilterVisible(false);
                } else {
                  setFilterVisible(true);
                }
              }}
            />
          </View>

          {filterVisible && <FilterForm onChangeText={setSearchText} />}
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
              (filteredProducts.length > 0 ? filteredProducts : products).map(
                (product) => (
                  <ProductCard
                    editButton
                    hasQuantity
                    key={product.id}
                    {...product}
                    onButtonPress={() => {
                      setSelectedProduct(product);
                      setIsEditModalOpen(true);
                    }}
                  />
                )
              )
            )}
            <EditProductModal
              isModalOpen={isEditModalOpen}
              closeModal={() => setIsEditModalOpen(false)}
              onchangeText={(value) => setNewPrice(Number(value))}
              onSave={handleUdatePrice}
            />
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
