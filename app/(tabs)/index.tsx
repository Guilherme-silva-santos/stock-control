import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { CameraView, useCameraPermissions } from "expo-camera";
import { useRef, useState } from "react";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const [permition, requestPermission] = useCameraPermissions();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleOpenCamera = async () => {
    try {
      const { granted } = await requestPermission();
      if (!granted) {
        return Alert.alert(
          "Permissão negada",
          "Você precisa permitir o acesso à camera para usar o app."
        );
      }
      setIsModalOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCodeScanned = (data: string) => {
    setIsModalOpen(false);
    console.log(data);
    router.push({
      pathname: "/(tabs)/explore",
      params: { product: data },
    });
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        padding: 100,
        justifyContent: "center",
      }}
    >
      <Modal visible={isModalOpen}>
        <CameraView
          facing="back"
          style={{ flex: 1 }}
          onBarcodeScanned={({ data }) => handleCodeScanned(data)}
        >
          <TouchableOpacity
            style={{ backgroundColor: "red" }}
            onPress={() => setIsModalOpen(false)}
          >
            <Text>Fechar</Text>
          </TouchableOpacity>
        </CameraView>
      </Modal>
      <TouchableOpacity
        style={{ backgroundColor: "red" }}
        onPress={handleOpenCamera}
      >
        <Text>Open Camera</Text>
      </TouchableOpacity>
    </View>
  );
}
