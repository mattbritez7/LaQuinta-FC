import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase'

export const readDateslessDefeatedFences = async () => {
  const querySnapshot = await getDocs(collection(db, 'lessDefeatedFences'));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  });
};
