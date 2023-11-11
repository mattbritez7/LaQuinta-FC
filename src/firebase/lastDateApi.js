import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const readDatesLastDate = async () => {
  const querySnapshot = await getDocs(collection(db, 'lastDate'));
  const readDatesLastDate = [];

  querySnapshot.forEach((doc) => {
    console.log(doc.data());
    readDatesLastDate.push({
      tableName: 'ULTIMA FECHA',
      club1: doc.data().club1,
      club2: doc.data().club2,
      date: doc.data().date,
      time: doc.data().time,
      result: doc.data().result,
    });
  });

  return readDatesLastDate;
};
