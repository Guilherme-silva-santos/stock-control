import { StyleSheet, Text, View } from "react-native";

import { useLocalSearchParams, useSearchParams } from "expo-router/build/hooks";

export default function Explore() {
  const params = useSearchParams();
  const product = params.get("product");
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
