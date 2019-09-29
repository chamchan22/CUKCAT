import firebase from 'firebase/app';
import 'firebase/firestore';
import keys from './constants/keys';

try {
  firebase.initializeApp(keys);
} catch (error) {
  console.log(error);
}

export default firebase;
