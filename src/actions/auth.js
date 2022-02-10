import { signInWithPopup, getAuth, signOut } from "firebase/auth";
import { googleAuthProvider } from '../firebase/firebase';

const auth = getAuth();

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const logout = () => ({
   type: 'LOGOUT'
});


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