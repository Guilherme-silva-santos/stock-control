import { fontSizes } from "@/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { FC } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type IconNames = keyof typeof MaterialIcons.glyphMap;

type VariantProps = "default" | "outlined";

type IconButtonProps = TouchableOpacityProps & {
  iconName: IconNames;
  text?: string;
  variant?: VariantProps;
  color?: string;
  size?: number;
  iconSize?: number;
  iconColor: string;
};

export const IconButton: FC<IconButtonProps> = ({
  iconName,
  text,
  size,
  iconSize = 18,
  variant = "default",
  color,
  iconColor,
  ...rest
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        variant === "default" ? styles.container : styles.containerOutlined,
        variant === "default"
          ? { backgroundColor: color, width: size, height: size }
          : { borderColor: color, width: size, height: size },
      ]}
      {...rest}
    >
      <MaterialIcons name={iconName} size={iconSize} color={iconColor} />
      {text && <Text style={[styles.text, { color: color }]}>{text}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderRadius: 8,
  },
  containerOutlined: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    padding: 8,
    borderWidth: 1,
  },
  text: {
    fontSize: fontSizes.large,
  },
});
