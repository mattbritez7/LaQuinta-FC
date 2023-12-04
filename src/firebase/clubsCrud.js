import { doc, setDoc, getDocs, collection } from 'firebase/firestore';
import { db } from './firebase';

export const clubsAdd = async (clubData) => { 

  for (let i = 1; i < clubData.length; i++) {
    const club = clubData[i];
    const clubName = club['A'];
    const players = club['B'].split(',').map(player => player.trim());
    const j = club['C'];
    const g = club['D'];
    const p = club['E'];
    const e = club['F'];
    const gf = club['G'];
    const ge = club['H'];

    const clubRef = doc(db, 'clubs1', clubName);
    
    try {
      await setDoc(clubRef, {
        clubName,
        players,
        j,
        g,
        p,
        e,
        gf,
        ge
      });
      console.log(`Equipo ${clubName} agregado o actualizado con éxito.`);
    } catch (error) {
      console.error(`Error al agregar equipo:`, error);
    }
  }
};

export const clubsGet = async (club) => {

  const querySnapshot = await getDocs(collection(db, club));
  const readDatesClub = [];

  querySnapshot.forEach((doc) => {
    console.log(doc.data());
    const points = doc.data().g * 3 + doc.data().e * 1;
    const diferentGoals = doc.data().gf - doc.data().ge;

    if(club == 'clubs1') {
      readDatesClub.push({
        tableName: 'CATEGORÍA A',
        clubName: doc.data().clubName,
        players: doc.data().players,
        j: doc.data().j,
        g: doc.data().g,
        p: doc.data().p,
        e: doc.data().e,
        gf: doc.data().gf,
        ge: doc.data().ge,
        dg: diferentGoals,
        pts: points,
      });
    }
  });
  console.log(readDatesClub + 'que es esto')
  return readDatesClub;
}

