import { collection, getDocs, setDoc, doc } from 'firebase/firestore';
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

export const addLessDefeatedFences = async (clubData, leagueIdentifier) => { 
  console.log(leagueIdentifier)
  
  for (let i = 1; i < clubData.length; i++) {
    const club = clubData[i];
    const player = club['A'];
    const clubName = club['B'];
    const goals = club['C'];

    const clubRef = doc(db, leagueIdentifier, clubName);
    
    try {
      await setDoc(clubRef, {
          player,
          clubName,
          goals
      });
      console.log(`Equipo ${clubName} agregado o actualizado con éxito.`);
    } catch (error) {
      console.error(`Error al agregar equipo:`, error);
    }
  }
};

