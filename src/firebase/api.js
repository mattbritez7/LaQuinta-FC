import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const readDateslessDefeatedFences = async () => {
  const querySnapshot = await getDocs(collection(db, 'lessDefeatedFences'));
  const readDateslessDefeatedFences = [];

  querySnapshot.forEach((doc) => {
    readDateslessDefeatedFences.push({
      tableName: 'VALLAS MENOS VENCIDAS',
      player: doc.data().player,
      club: doc.data().club,
      goals: doc.data().goals,
    });
  });

  return readDateslessDefeatedFences;
};
