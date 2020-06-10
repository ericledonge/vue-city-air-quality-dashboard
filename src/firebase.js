import firebase from 'firebase/app';
import 'firebase/firestore';
import { firebaseConfig } from './config/firebase.config';

firebase.initializeApp(firebaseConfig);

// firebase.firestore.setLogLevel('debug');

const db = firebase.firestore();

export { db };
