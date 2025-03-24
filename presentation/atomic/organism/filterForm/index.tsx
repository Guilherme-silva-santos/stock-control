import { FC } from "react";
import Animated, {
  FadeInLeft,
  FadeInRight,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Input } from "../../atoms";

export const FilterForm: FC = () => {
  //   const translateX = useSharedValue<number>(0);
  //   const animatedStyles = useAnimatedStyle(() => ({
  //     transform: [{ translateX: withSpring(translateX.value * 2) }],
  //   }));

  return (
    <Animated.View
      entering={FadeInRight.duration(1000)}
      style={{ width: "50%" }}
    >
      <Input placeholder="Pesquisar..." />
    </Animated.View>
  );
};
