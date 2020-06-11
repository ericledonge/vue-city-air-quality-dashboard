import firebase from 'firebase/app';
import 'firebase/firestore';
import { firebaseConfig } from './config/firebase.config';
import 'firebase/auth';

firebase.initializeApp(firebaseConfig);

// firebase.firestore.setLogLevel('debug');

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
