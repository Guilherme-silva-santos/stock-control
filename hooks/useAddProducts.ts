import { db } from "@/service/firebaseConfig";
import { useRouter } from "expo-router";
import { addDoc, collection } from "firebase/firestore";

export const useAddProducts = () => {
  const router = useRouter();
  const addProduct = async (name: string, price: number, barcode: string) => {
    try {
      await addDoc(collection(db, "products"), {
        name,
        price,
        barcode,
      });
      console.log("Produto adicionado com sucesso!");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return { addProduct };
};
