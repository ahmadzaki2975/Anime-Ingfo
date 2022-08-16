import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDocs, setDoc, getFirestore, collection } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0GZ0dwxltJsRDJeC6lZoa_S06rpprvnQ",
  authDomain: "anime-ingfo.firebaseapp.com",
  projectId: "anime-ingfo",
  storageBucket: "anime-ingfo.appspot.com",
  messagingSenderId: "307683209829",
  appId: "1:307683209829:web:9164b387220d94f7378c8c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Get Doc
export const getDocument = async () => {
  const users = await getDocs(collection(db, "users"));
  console.log(users.docs)
  users.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().email}`);
  });
};

// Google SignIn
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((response:any) => {
      console.log(response.user.uid)
      localStorage.setItem("userId", response.user.uid);
      localStorage.setItem("username", response.user.displayName);
      setDoc(doc(db, "users", response.user.uid), {
        uid:response.user.uid,
        email:response.user.email,
        username:response.user.displayName
      })
    })
    .catch((err) => console.log(err));
};
