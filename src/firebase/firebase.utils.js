import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBqwhMDAZ0ft_-29y6yTKHgNWhl0uH5kCg',
  authDomain: 'react-shop-71d11.firebaseapp.com',
  databaseURL: 'https://react-shop-71d11.firebaseio.com',
  projectId: 'react-shop-71d11',
  storageBucket: 'react-shop-71d11.appspot.com',
  messagingSenderId: '172919243291',
  appId: '1:172919243291:web:ffcfdda9c195712d4beebe'
};

// Save (Google) User Profile in Database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  } else {
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // DocumentSnapshot
    const snapShot = await userRef.get();
    // Logged in User is not yet saved inti database (exists: false)
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (err) {
        console.log('error creating user', err.message);
      }
    }

    return userRef;
  }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
