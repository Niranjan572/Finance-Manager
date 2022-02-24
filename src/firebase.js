// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyAMG8X-x3rdyLT6ek0QN-a35dmid8RVVmw",
	authDomain: "amzn-clone-nir.firebaseapp.com",
	projectId: "amzn-clone-nir",
	storageBucket: "amzn-clone-nir.appspot.com",
	messagingSenderId: "354168646137",
	appId: "1:354168646137:web:6fe06e62afdb43179ab528",
	measurementId: "G-K79X5NLF6X",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
