import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { IconButton } from "../../atoms";
import { colors, fontSizes, paddings } from "@/theme";
import { useRouter } from "expo-router";

type HeaderProps = {
  canGoBack?: boolean;
};

export const Header: FC<HeaderProps> = ({ canGoBack }) => {
  const router = useRouter();
  return (
    <View style={s.container}>
      {!canGoBack ? (
        <View style={{ width: 40 }} />
      ) : (
        <IconButton
          iconSize={24}
          iconName="chevron-left"
          iconColor={colors.gray[900]}
          onPress={() => {
            router.back();
          }}
        />
      )}

      <Text
        style={{
          fontSize: fontSizes.xxxxlarge,
          fontWeight: "bold",
          color: colors.gray[900],
          textAlign: "center",
          flex: 1,
        }}
      >
        🛒
      </Text>
      <IconButton
        iconSize={24}
        iconName="notifications-none"
        iconColor={colors.gray[900]}
      />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: paddings.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[300],
    backgroundColor: colors.primary,
  },
});
