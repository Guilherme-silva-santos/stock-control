import { db } from "@/service/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function List() {
  const [productsList, setProductsList] = useState<any[]>([]);
  const fetchProductsList = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProductsList(productsList);
      console.log(productsList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductsList();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
      }}
    >
      <Text>list</Text>
    </View>
  );
}
