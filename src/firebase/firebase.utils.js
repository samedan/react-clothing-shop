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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
