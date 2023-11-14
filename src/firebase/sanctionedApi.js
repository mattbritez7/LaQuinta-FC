import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const readDatesSanctioned = async () => {
  const querySnapshot = await getDocs(collection(db, 'sanctioned'));
  const readDatesSanctioned = [];

  querySnapshot.forEach((doc) => {
    readDatesSanctioned.push({
      tableName: 'SANCIONADOS',
      player: doc.data().player,
      club: doc.data().club,
      reason: doc.data().reason,
    });
  });

  return readDatesSanctioned;
};
