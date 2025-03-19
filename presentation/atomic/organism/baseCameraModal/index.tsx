import { CameraView, CameraViewProps } from "expo-camera";
import { FC } from "react";
import { Modal, StyleSheet, View } from "react-native";
import { colors, paddings } from "@/theme";
import { IconButton } from "../../atoms";

type Props = CameraViewProps & {
  isModalOpen: boolean;
  closeModal: () => void;
};
export const BaseCameraModal: FC<Props> = ({
  isModalOpen,
  closeModal,
  ...rest
}) => {
  return (
    <Modal visible={isModalOpen}>
      <CameraView {...rest} style={s.container}>
        <View style={s.buttoContainer}>
          <IconButton
            iconColor="#fff"
            iconName="close"
            onPress={closeModal}
            variant="default"
            size={40}
            color={colors.gray[700]}
          />
        </View>
      </CameraView>
    </Modal>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttoContainer: {
    width: "100%",
    padding: paddings.xl,
    alignItems: "flex-end",
  },
});
