import { colors, paddings, radius } from "@/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type SterpperProps = {
  value: number;
  onChange: (newValue: number) => void;
};

export const Stepper: FC<SterpperProps> = ({ value, onChange }) => {
  const increment = () => {
    onChange(value + 1);
  };

  const decrement = () => {
    onChange(value - 1);
  };

  return (
    <View style={s.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={decrement}>
        <MaterialIcons name="remove" size={16} color={colors.gray[900]} />
      </TouchableOpacity>
      <Text>{value}</Text>
      <TouchableOpacity activeOpacity={0.8} onPress={increment}>
        <MaterialIcons name="add" size={16} color={colors.gray[900]} />
      </TouchableOpacity>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: paddings.xs,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderRadius: radius.sm,
  },
});
