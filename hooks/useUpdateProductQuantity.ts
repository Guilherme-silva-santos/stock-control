import { db } from "@/service/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

export const useUpdateProductQuantity = () => {
  const updateProductQuantity = async (id: string, newQuantity: number) => {
    try {
      await updateDoc(doc(db, "products", id), {
        quantity: newQuantity,
      });
      console.log("Quantidade atualizada com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };
  return { updateProductQuantity };
};
