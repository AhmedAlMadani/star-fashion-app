import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider
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

  const provider = new GoogleAuthProvider();
  provider.getCustomParameters({
      prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider);

  export const db = getFirestore();
  
  export const createUserDocumentFromAuth = async (userAuth) => {
      const userDocumentReference = doc(db,'users',userAuth.uid);

      const userSnapshot = await getDoc(userDocumentReference);

      if(!userSnapshot.exists()){
          const { displayName, email } = userAuth;
          const createdAt = new Date();

          try {
              await setDoc(userDocumentReference, {
                  displayName,
                  email,
                  createdAt
              });
          } catch (error) {
              console.log('error creating user', error.message);
          }
      }

      return userDocumentReference;
  };