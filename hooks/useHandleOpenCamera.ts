import { useCameraPermissions } from "expo-camera";
import { Alert } from "react-native";

type Props = {
  setModalOpen: (value: boolean) => void;
};

export const useHandleOpenCamera = ({ setModalOpen }: Props) => {
  const [permition, requestPermission] = useCameraPermissions();

  const handleOpenCamera = async () => {
    try {
      const { granted } = await requestPermission();
      setModalOpen(true);
      if (!granted) {
        return Alert.alert(
          "Permissão Negada",
          " Vocé precisa permitir o acesso a camera para usar o app."
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { handleOpenCamera };
};
