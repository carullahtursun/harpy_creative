import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 🔹 Firebase yapılandırması (Tek hesap kullanımı)
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHMaTy5kr6FLFgaCRJipfjgWZIiP9E6ls",
  authDomain: "harpyc-reative.firebaseapp.com",
  projectId: "harpyc-reative",
  storageBucket: "harpyc-reative.firebasestorage.app",
  messagingSenderId: "187287388162",
  appId: "1:187287388162:web:d27cecf0bd4425daf6e71b"
};

// 🔹 Firebase uygulamasını başlatma
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// 🔹 Firestore bağlantısını dışa aktar
export const db = getFirestore(app);