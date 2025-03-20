import { FC } from "react";
import { View } from "react-native";
import { Header } from "../../molecules";
import { colors, paddings } from "@/theme";

type Props = {
  children: React.ReactNode;
  canGoBack?: boolean;
};
export const UserScreenTemplate: FC<Props> = ({ children, canGoBack }) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <Header canGoBack={canGoBack} />
      {children}
    </View>
  );
};
