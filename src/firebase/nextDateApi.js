import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const readDatesNextDate = async () => {
  const querySnapshot = await getDocs(collection(db, 'nextDate'));
  const readDatesNextDate = [];

  querySnapshot.forEach((doc) => {
    console.log(doc.data());
    readDatesNextDate.push({
      tableName: 'SIGUIENTE FECHA',
      club1: doc.data().club1,
      club2: doc.data().club2,
      date: doc.data().date,
      time: doc.data().time,
    });
  });

  return readDatesNextDate;
};
