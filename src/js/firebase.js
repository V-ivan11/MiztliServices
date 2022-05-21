// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCtCxzOfbXSKoTklAozw2H87bEZsD3df_Y",
    authDomain: "miztliweb.firebaseapp.com",
    databaseURL: "https://miztliweb-default-rtdb.firebaseio.com",
    projectId: "miztliweb",
    storageBucket: "miztliweb.appspot.com",
    messagingSenderId: "787948092604",
    appId: "1:787948092604:web:44b34795b8ea6ea334e4b9",
    measurementId: "G-2FFK2M5FB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();

export const saveEmail = (email) =>{
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    addDoc(collection(db, 'email'), {email: email, date: hoy})
}