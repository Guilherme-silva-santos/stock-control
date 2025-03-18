import { db } from "@/service/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const useFindProductByBarCode = () => {
  const findProductsByBarCode = async (barCode: string) => {
    try {
      const q = query(
        collection(db, "products"),
        where("barcode", "==", barCode)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // if is not empty retun the firts product at the list
        return querySnapshot.docs[0].data();
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { findProductsByBarCode };
};
