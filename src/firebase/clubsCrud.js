import { doc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

const clubsCrud = async (clubData) => { 

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

export default clubsCrud;