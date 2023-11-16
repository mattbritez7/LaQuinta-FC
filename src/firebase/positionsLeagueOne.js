import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const readDatesPositionsLeagueOne = async () => {
  const querySnapshot = await getDocs(collection(db, 'positionsLeagueOne'));
  const readDatesPositionsLeagueOne = [];

  querySnapshot.forEach((doc) => {
    const points = doc.data().g * 3 + doc.data().e;
    const diferentGoals = doc.data().gf - doc.data().ge;

    readDatesPositionsLeagueOne.push({
      tableName: 'CATEGORÍA A',
      club: doc.data().club,
      j: doc.data().j,
      g: doc.data().g,
      e: doc.data().e,
      p: doc.data().p,
      gf: doc.data().gf,
      ge: doc.data().ge,
      dg: diferentGoals,
      pts: points,
    });
  });

  return readDatesPositionsLeagueOne;
};
