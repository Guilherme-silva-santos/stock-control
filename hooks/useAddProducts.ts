import { db } from "@/service/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

export const useAddProducts = () => {
  const addProduct = async (
    name: string,
    price: number,
    quantity: number,
    barcode: number
  ) => {
    try {
      await addDoc(collection(db, "products"), {
        name,
        price,
        quantity,
        barcode,
      });
      console.log("Produto adicionado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };
  return { addProduct };
};
