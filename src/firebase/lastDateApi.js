import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const readDatesLastDate = async () => {
  const querySnapshot = await getDocs(collection(db, 'lastDate'));
  const readDatesLastDate = [];

  querySnapshot.forEach((doc) => {
    console.log(doc.data());
    readDatesLastDate.push({
      tableName: 'ULTIMA FECHA',
      player: doc.data().player,
      club: doc.data().club,
      goals: doc.data().goals,
    });
  });

  return readDatesLastDate;
};
