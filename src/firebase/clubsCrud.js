import { doc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

const clubsCrud = async (clubData) => {

    const rowRange = clubData['!ref'].split(':')[1].match(/\d+/g);
    // Iterar sobre las filas en el rango y procesar los datos del equipo
    for (let i = parseInt(rowRange[0]); i <= parseInt(rowRange[1]); i++) {
      const clubName = clubData[`A${i}`].v;
      const players = clubData[`B${i}`].v.split(',');
      console.log(clubName + 'llegue'); 

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
}

export default clubsCrud;