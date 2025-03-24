import { db } from "@/service/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

export const useUpdateProduct = () => {
  const updateProduct = async (id: string, newPrice: number) => {
    try {
      await updateDoc(doc(db, "products", id), {
        price: newPrice,
      });
      console.log("Preço atualizado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };
  return { updateProduct };
};
