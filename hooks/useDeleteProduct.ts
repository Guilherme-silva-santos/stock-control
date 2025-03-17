import { db } from "@/service/firebaseConfig";
import { deleteDoc, doc } from "firebase/firestore";

export const useDeleteProduct = () => {
  const deleteProduct = async (id: string) => {
    try {
      await deleteDoc(doc(db, "products", id));
      console.log("Produto deletado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };
  return { deleteProduct };
};
