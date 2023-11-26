import { doc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

const clubsCrud = async (clubData) => {

    const clubName = clubData['A2'].v;
    const players = clubData['B2'].v.split(',');

    const clubRef = doc(db, 'clubs1', clubName);
    console.log(clubName, players);
    // Utilizar setDoc para agregar o actualizar el documento
    await setDoc(clubRef, {
      clubName: clubName,
      players: players
      // Otros campos relevantes
    });

    console.log(`Equipo ${clubName} agregado o actualizado con éxito.`);
}

export default clubsCrud;