import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, serverTimestamp ,getDoc} from "firebase/firestore";
import { db } from "./firebase";

export const addPortfolio = async (portfolioData) => {
    try {
        const docRef = await addDoc(collection(db, "portfolios"), {
            ...portfolioData,
            createdAt: serverTimestamp(),
        });
        return docRef.id;
    } catch (error) {
        console.error("Portfolyo eklenirken hata oluştu:", error);
        throw error;
    }
};

export const getPortfolios = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "portfolios"));
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Portfolyolar alınırken hata oluştu:", error);
        throw error;
    }
};

// 🔹 Portfolyo Güncelleme Fonksiyonu
export const updatePortfolio = async (portfolioId, updatedData) => {
    try {
        await updateDoc(doc(db, "portfolios", portfolioId), updatedData);
        return true;
    } catch (error) {
        console.error("Portfolyo güncellenirken hata oluştu:", error);
        throw error;
    }
};

// 🔹 Portfolyo Silme Fonksiyonu (Cloudinary'deki resimleri de siler)
export const deletePortfolio = async (portfolioId) => {
    try {
        await deleteDoc(doc(db, "portfolios", portfolioId));
        return true;
    } catch (error) {
        console.error("Portfolyo silinirken hata oluştu:", error);
        throw error;
    }
};

// 🔹 Portfolyo Detaylarını Alma Fonksiyonu
export const getPortfolioById = async (portfolioId) => {
    try {
        const docRef = doc(db, "portfolios", portfolioId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            console.log("Portfolyo bulunamadı!");
            return null;
        }
    } catch (error) {
        console.error("Portfolyo alınırken hata oluştu:", error);
        throw error;
    }
};