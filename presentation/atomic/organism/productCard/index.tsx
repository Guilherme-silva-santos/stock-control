import { colors, paddings, radius } from "@/theme";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { IconButton } from "../../atoms";
import { FC } from "react";

type Props = {
  onButtonPress: () => void;
  name: string;
  price: number;
  quantity: number;
};

export const ProductCard: FC<Props> = ({
  onButtonPress,
  name,
  price,
  quantity,
}) => {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <Text style={s.title}>{name}</Text>

        <IconButton
          iconColor={colors.primary}
          iconName="edit"
          iconSize={24}
          size={40}
          onPress={onButtonPress}
        />
      </View>
      <View style={s.infoContainer}>
        <View style={s.imageContainer}>
          <MaterialCommunityIcons
            name="image"
            size={24}
            color={colors.gray[500]}
          />
        </View>
        <View style={s.textContainer}>
          <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
            <MaterialIcons
              name="price-change"
              size={20}
              color={colors.gray[500]}
            />
            <Text style={s.productInfo}>{price}</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
            <MaterialIcons
              name="production-quantity-limits"
              size={20}
              color={colors.gray[500]}
            />
            <Text style={s.productInfo}>{quantity}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    width: "100%",
    padding: paddings.sm,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: radius.sm,
    borderColor: colors.gray[200],
    backgroundColor: colors.white,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 12,
  },
  imageContainer: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.gray[200],
    borderRadius: radius.sm,
    padding: paddings.xxl,
  },
  textContainer: {
    width: "70%",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.gray[900],
  },
  productInfo: {
    fontSize: 14,
    color: colors.gray[900],
  },
});
