import { colors, paddings, radius } from "@/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { FC } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type IconNames = keyof typeof MaterialIcons.glyphMap;

type FloatButtonProps = TouchableOpacityProps & {
  iconName: IconNames;
  iconSize?: number;
  iconColor?: string;
};
export const FloatButton: FC<FloatButtonProps> = ({
  iconName,
  iconSize,
  iconColor,
  ...rest
}) => {
  return (
    <TouchableOpacity style={s.container} {...rest}>
      <MaterialIcons name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: paddings.lg,
    borderRadius: radius.full,
    backgroundColor: colors.primary,
    zIndex: 1,
    position: "absolute",
    bottom: 100,
    right: 30,
  },
});
