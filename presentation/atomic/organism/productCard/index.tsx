import { colors, paddings, radius } from "@/theme";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { IconButton, Stepper } from "../../atoms";
import { FC, useState } from "react";

type Props = {
  onButtonPress?: () => void;
  editButton?: boolean;
  name: string;
  price: number;
  quantity: number;
  hasQuantity?: boolean;
  hasStepper?: boolean;
};

export const ProductCard: FC<Props> = ({
  onButtonPress,
  name,
  price,
  quantity,
  editButton,
  hasQuantity,
  hasStepper,
}) => {
  const [stepperValue, setStepperValue] = useState(0);

  return (
    <View style={s.container}>
      <View style={s.header}>
        <Text style={s.title}>{name}</Text>

        {editButton && (
          <IconButton
            iconName="edit"
            iconColor={colors.gray[500]}
            onPress={onButtonPress}
          />
        )}
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
            <Text style={s.productInfo}>R$ {price}</Text>
          </View>
          {hasQuantity && (
            <View
              style={{ flexDirection: "row", gap: 6, alignItems: "center" }}
            >
              <MaterialIcons
                name="production-quantity-limits"
                size={20}
                color={colors.gray[500]}
              />
              <Text style={s.productInfo}>{quantity} em estoque</Text>
            </View>
          )}
          {hasStepper && (
            <Stepper value={stepperValue} onChange={setStepperValue} />
          )}
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
    gap: 4,
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
