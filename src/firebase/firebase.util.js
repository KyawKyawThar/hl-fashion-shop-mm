import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEb2yaZavxVNENtyNj2qO_Ojk8eIcdoAk",
  authDomain: "hl-db-68b3b.firebaseapp.com",
  projectId: "hl-db-68b3b",
  storageBucket: "hl-db-68b3b.appspot.com",
  messagingSenderId: "76771658475",
  appId: "1:76771658475:web:b88b9aaeda84f04ecb4cae",
  measurementId: "G-KND3Y5Q9ZC",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error);
    }
  }
  return userRef;
};


export const addCollectionAndDocument = (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return batch.commit();
};


export const convertCollectionsSnpashotToMap = collections => {
   const transformCollections = collections.docs.map(doc => {
     const {title,items} = doc.data()

     return {
       routeName: encodeURI(title.toLowerCase()),
       id: doc.id,
       title,
       items
     }
   })

   return transformCollections.reduce((accumulator,collection) => {
     accumulator[collection.title.toLowerCase()] = collection
       return accumulator
   },{})

   
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
