import { colors, fontSizes, paddings } from "@/theme";
import { FC } from "react";
import { Text, View } from "react-native";

type CartTotalFooterProps = {
  total: number;
};
export const CartTotalFooter: FC<CartTotalFooterProps> = ({ total }) => {
  return (
    <View style={{ backgroundColor: colors.white, padding: paddings.sm }}>
      <Text style={{ fontSize: fontSizes.xlarge, fontWeight: "bold" }}>
        SubTotal: R$ {total}
      </Text>
    </View>
  );
};
