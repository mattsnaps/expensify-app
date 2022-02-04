import { initializeApp } from "firebase/app";

const firebaseConfig = {

    apiKey: "AIzaSyBWTWtDjC6inf0eOcuypLWpNkQh88WfQ5Q",

    authDomain: "expensify-354da.firebaseapp.com",

    databaseURL: "https://expensify-354da-default-rtdb.firebaseio.com",

    projectId: "expensify-354da",

    storageBucket: "expensify-354da.appspot.com",

    messagingSenderId: "390392029270",

    appId: "1:390392029270:web:b1090039ce5d03edf35bf7",

    measurementId: "G-FFYBDDGHCM"

};

const appFirebaseDatabase = initializeApp(firebaseConfig);


export default appFirebaseDatabase;
