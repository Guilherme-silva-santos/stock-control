import { FC } from "react";
import { Modal, StyleSheet, Text, TextInput, View } from "react-native";
import { Button, IconButton, Input } from "../../atoms";
import { colors, fontSizes, paddings } from "@/theme";

type Props = {
  isModalOpen: boolean;
  onSave: () => void;
  closeModal: () => void;
  onchangeText: (value: string) => void;
};

export const EditProductModal: FC<Props> = ({
  isModalOpen,
  onSave,
  closeModal,
  onchangeText,
}) => {
  return (
    <Modal visible={isModalOpen} animationType="slide" transparent={true}>
      <View style={s.overlay}>
        <View style={s.container}>
          <View style={s.header}>
            <View style={{ width: 40 }} />
            <Text style={s.title}>Editar Produto</Text>
            <IconButton
              iconName="close"
              iconColor={colors.gray[900]}
              iconSize={24}
              variant="default"
              onPress={closeModal}
            />
          </View>
          <Input onChangeText={onchangeText} placeholder="Digite aqui..." />
          <Button text="Atualizar" onPress={onSave} />
        </View>
      </View>
    </Modal>
  );
};

const s = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(225, 225, 225, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    padding: paddings.xl,
  },
  container: {
    backgroundColor: "#fff",
    gap: 8,
    borderRadius: 16,
    padding: 20,
    minWidth: "70%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: fontSizes.xlarge,
  },
});
