import { signInWithPopup, getAuth, signOut } from "firebase/auth";
import { googleAuthProvider } from '../firebase/firebase';

const auth = getAuth();

export const startLogin = () => {
    return () => {
        return signInWithPopup(auth, googleAuthProvider);
    };
};

export const startLogout = () => {
    return () => {
        return signOut(auth);
    }
};