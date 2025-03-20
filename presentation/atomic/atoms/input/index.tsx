import { colors, fontSizes } from "@/theme";
import { FC } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

type InputProps = TextInputProps & {
  labelValue?: string;
  label?: boolean;
  placeholder: string;
};

export const Input: FC<InputProps> = ({
  label,
  labelValue,
  placeholder,
  ...rest
}) => {
  return (
    <View style={s.container}>
      {label && <Text style={{ fontSize: fontSizes.large }}>{labelValue}</Text>}
      <TextInput style={s.inputContainer} placeholder={placeholder} {...rest} />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    width: "100%",
    gap: 8,
  },

  inputContainer: {
    minHeight: 46,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray[300],
    padding: 8,
  },
});
