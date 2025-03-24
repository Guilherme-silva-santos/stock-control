import { FC } from "react";
import Animated, { FadeInRight } from "react-native-reanimated";
import { Input } from "../../atoms";
import { StyleSheet } from "react-native";
import { paddings } from "@/theme";

type Props = {
  onChangeText: (text: string) => void;
};

export const FilterForm: FC<Props> = ({ onChangeText }) => {
  return (
    <Animated.View entering={FadeInRight.duration(1000)} style={s.container}>
      <Input placeholder="Pesquisar..." onChangeText={onChangeText} />
    </Animated.View>
  );
};

const s = StyleSheet.create({
  container: {
    width: "100%",
    padding: paddings.lg,
    gap: 8,
  },
});
