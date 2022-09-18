// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBZ_V_YGWhM2YH4aoBrEOBNeLRm_yflirM",
	authDomain: "blogspot-c5da9.firebaseapp.com",
	projectId: "blogspot-c5da9",
	storageBucket: "blogspot-c5da9.appspot.com",
	messagingSenderId: "874745701180",
	appId: "1:874745701180:web:6d0fff9d7b00766e2b3439",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
