import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB4YO_EW1yEMTccrmWU9Mv-D_Drq1rt9Us",
    authDomain: "star-fashion-app-beba5.firebaseapp.com",
    projectId: "star-fashion-app-beba5",
    storageBucket: "star-fashion-app-beba5.appspot.com",
    messagingSenderId: "385402940447",
    appId: "1:385402940447:web:ff674f3c4131b663ce392a"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  googleProvider.getCustomParameters({
      prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);

  export const db = getFirestore();
  
  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
      const userDocumentReference = doc(db,'users',userAuth.uid);

      const userSnapshot = await getDoc(userDocumentReference);

      if(!userSnapshot.exists()){
          const { displayName, email } = userAuth;
          const createdAt = new Date();

          try {
              await setDoc(userDocumentReference, {
                  displayName,
                  email,
                  createdAt,
                  ...additionalInformation
              });
          } catch (error) {
              console.log('error creating user', error.message);
          }
      }

      return userDocumentReference;
  };

  export const createAuthUserWithEmailAndPassword = async(email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password);
};

export const signInAuthUserWithEmailAndPassword = async(email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth,email,password);
};