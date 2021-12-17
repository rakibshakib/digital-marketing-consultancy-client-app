// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const initializeFireBase = () => {
    initializeApp(firebaseConfig)
}
initializeFireBase()

export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();


// useEffect(() => {
//     const unSubscribed = onAuthStateChanged(auth, (result) => {
//         if (result) {
//             dispatch(updateUserState({ user: result.user }))
//         } else {
//             dispatch(updateUserState({ user: {} }))
//         }
//     });
//     return () => unSubscribed
// }, [])