import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const readDatesLessDefeatedFences = async () => {
  const querySnapshot = await getDocs(collection(db, 'lessDefeatedFences'));
  const readDatesLessDefeatedFences = [];

  querySnapshot.forEach((doc) => {
    readDatesLessDefeatedFences.push({
      tableName: 'VALLAS MENOS VENCIDAS',
      player: doc.data().player,
      club: doc.data().club,
      goals: doc.data().goals,
    });
  });

  return readDatesLessDefeatedFences;
};
