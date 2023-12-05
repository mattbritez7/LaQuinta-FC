import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const readDates = async (collectionName, tableName) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const readDatesResult = [];

  querySnapshot.forEach((doc) => {
    readDatesResult.push({
      tableName,
      ...doc.data(),
    });
  });

  return readDatesResult;
};