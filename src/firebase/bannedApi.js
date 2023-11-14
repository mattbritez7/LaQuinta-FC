import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const readDatesBanned = async () => {
  const querySnapshot = await getDocs(collection(db, 'banned'));
  const readDatesBanned = [];

  querySnapshot.forEach((doc) => {
    readDatesBanned.push({
      tableName: 'VETADOS',
      player: doc.data().player,
      club: doc.data().club,
      reason: doc.data().reason,
    });
  });

  return readDatesBanned;
};
