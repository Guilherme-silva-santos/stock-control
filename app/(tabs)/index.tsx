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
  const [modalVisible, setModalVisible] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();
  const [productName, setProductName] = useState("");
  const router = useRouter();

  const barCodeLock = useRef(false);

  const handleOpenCamera = async () => {
    try {
      const { granted } = await requestPermission();

      if (!granted) {
        return Alert.alert("Permission not granted");
      }

      setModalVisible(true);
      barCodeLock.current = false;
    } catch (error) {}
  };

  const handleBarCodeScanned = (data: string) => {
    setModalVisible(false);
    console.log(data);
    setProductName(data);

    router.push({
      pathname: "/explore",
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
      <TouchableOpacity onPress={handleOpenCamera}>
        <Text style={{ color: "white" }}>Open camera</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible}>
        <CameraView
          style={{ flex: 1 }}
          facing="back"
          onBarcodeScanned={({ data }) => {
            if (data && !barCodeLock.current) {
              barCodeLock.current = true;
              setTimeout(() => {
                handleBarCodeScanned(data);
              }, 500);
            }
          }}
        />
        <View style={{ position: "absolute", top: 20, right: 20 }}>
          <TouchableOpacity
            style={{ backgroundColor: "black", padding: 10 }}
            onPress={() => setModalVisible(false)}
          >
            <Text style={{ color: "white" }}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
