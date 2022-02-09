import { signInWithPopup, getAuth } from "firebase/auth";
import { googleAuthProvider } from '../firebase/firebase';

const auth = getAuth();

export const startLogin = () => {
    return () => {
        return signInWithPopup(auth, googleAuthProvider);
    };
};