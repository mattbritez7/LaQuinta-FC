import { doc, setDoc, getDocs, collection } from 'firebase/firestore';
import { db } from './firebase';

export const clubsAdd = async (clubData, leagueIdentifier) => { 
  console.log(leagueIdentifier)
  for (let i = 2; i < clubData.length; i++) {
    const club = clubData[i];
    const clubName = club['A'];
    const players = club['B']?.split(',')?.map(player => player.trim()) || [];
    const j = club['C'];
    const g = club['D'];
    const p = club['F'];
    const e = club['E'];
    const gf = club['G'];
    const ge = club['H'];

    const clubRef = doc(db, leagueIdentifier, clubName);
    
    try {
      await setDoc(clubRef, {
        clubName,
        players,
        j,
        g,
        p,
        e,
        gf,
        ge,
        orderIndex: i,
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

    // Construir dinámicamente el nombre de la tabla
    const tableName = `CATEGORÍA ${club.toUpperCase()}`;

    readDatesClub.push({
      tableName,
      clubName: doc.data().clubName,
      players: doc.data().players,
      j: doc.data().j,
      g: doc.data().g,
      p: doc.data().p,
      e: doc.data().e,
      gf: doc.data().gf,
      ge: doc.data().ge,
      dg: diferentGoals,
      orderIndex: doc.data().orderIndex,
      pts: points,
    });
  });

  console.log(readDatesClub + 'que es esto');
  return readDatesClub;
};