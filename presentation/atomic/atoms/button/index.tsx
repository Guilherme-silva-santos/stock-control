import { colors, fontSizes, paddings, radius } from "@/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { FC } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

type IcoName = keyof typeof MaterialIcons.glyphMap;
type ButtonProps = TouchableOpacityProps & {
  text: string;
  iconName?: IcoName;
  icon: boolean;
};
export const Button: FC<ButtonProps> = ({ text, icon, iconName, ...rest }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={s.container} {...rest}>
      {icon && <View style={{ width: 24 }} />}
      <Text style={s.text}>{text}</Text>

      {icon && (
        <MaterialIcons name={iconName} size={24} color={colors.gray[900]} />
      )}
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: paddings.sm,
    paddingVertical: paddings.md,
    borderWidth: 1,
    borderRadius: radius.sm,
    borderColor: colors.gray[200],
    backgroundColor: colors.primary,
  },
  text: {
    flex: 1,
    textAlign: "center",
    color: colors.gray[900],
    fontSize: fontSizes.xlarge,
    fontWeight: "bold",
  },
});
