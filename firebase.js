// import firebase from "firebase";
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyACiI9W9mt-6zUN4LAMG4USFNAZS9Zhyr4",
  authDomain: "fileshare-c0d0d.firebaseapp.com",
  projectId: "fileshare-c0d0d",
  storageBucket: "fileshare-c0d0d.appspot.com",
  messagingSenderId: "841323780359",
  appId: "1:841323780359:web:2f26a112535e6db4b78da2",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { firebaseApp, auth, db };
