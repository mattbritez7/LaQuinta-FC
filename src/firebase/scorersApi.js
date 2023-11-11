import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const readDatesScorers = async () => {
  const querySnapshot = await getDocs(collection(db, 'scorers'));
  const readDatesScorers = [];

  querySnapshot.forEach((doc) => {
    readDatesScorers.push({
      tableName: 'GOLEADORES',
      player: doc.data().player,
      club: doc.data().club,
      goals: doc.data().goals,
    });
  });

  return readDatesScorers;
};
