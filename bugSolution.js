import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  // ... your config
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getUserData = async (user) => {
  const q = query(collection(db, 'users'), where('uid', '==', user.uid));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  });
};

// Example usage:
const user = { uid: 'some-user-id' };
getUserData(user);
