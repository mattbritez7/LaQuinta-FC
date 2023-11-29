import { doc, setDoc, getDocs, collection } from 'firebase/firestore';
import { db } from './firebase';

export const clubsAdd = async (clubData) => { 

  for (let i = 1; i < clubData.length; i++) {
    const club = clubData[i];
    const clubName = club['A'];
    const players = club['B'].split(',').map(player => player.trim());
    const clubRef = doc(db, 'clubs1', clubName);
    
    try {
      await setDoc(clubRef, {
        clubName,
        players
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
    readDatesClub.push({
      tableName: 'CATEGORÍA A',
      clubName: doc.data().clubName,
      players: doc.data().players,
    });
  });

  return readDatesClub;
}