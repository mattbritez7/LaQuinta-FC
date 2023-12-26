import { doc, setDoc, getDocs, collection } from 'firebase/firestore';
import { db } from './firebase';

export const clubsAdd = async (clubData, leagueIdentifier) => { 
  (leagueIdentifier)
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
      (`Equipo ${clubName} agregado o actualizado con éxito.`);
    } catch (error) {
      console.error(`Error al agregar equipo:`, error);
    }
  }
};

export const clubsGet = async (club) => {
  const querySnapshot = await getDocs(collection(db, club));
  const readDatesClub = [];

  querySnapshot.forEach((doc) => {
    (doc.data());
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

  (readDatesClub + 'que es esto');
  return readDatesClub;
};

export const uploadExcelDataToFirestoreScorers = async (excelData, leagueIdentifier) => {
  const batch = [];

  for (let i = 2; i < excelData.length; i++) {
    const row = excelData[i];
    const player = row['A'];
    const club= row['B'];
    const count = row['C'];

    if (player && club && count) {
      // Si tenemos valores en playerName, clubName y goals, almacenamos los datos en Firestore
      const docData = {
        player,
        club,
        count,
      };

      // Almacenar el documento en la colección correspondiente a la tabla actual
      const docRef = doc(db, 'clubs1_scorers', player);  // Asignar un ID al documento

      batch.push(setDoc(docRef, docData));
    }
  }

  // Ejecutar la transacción por lotes
  try {
    await Promise.all(batch);
    ('Datos de jugadores cargados exitosamente en Firestore.');
  } catch (error) {
    console.error('Error al cargar datos de jugadores en Firestore:', error);
  }
};

export const uploadExcelDataToFirestoreSanctioned = async (excelData, leagueIdentifier) => {
  const batch = [];

  for (let i = 3; i < excelData.length; i++) {
    const row = excelData[i];
    const club= row['E'];
    const player = row['F'];
    const reason = row['G'];

    if (player && club && reason) {
      // Si tenemos valores en playerName, clubName y goals, almacenamos los datos en Firestore
      const docData = {
        player,
        club,
        reason,
      };

      // Almacenar el documento en la colección correspondiente a la tabla actual
      const docRef = doc(db, 'clubs1_sanctioned', player);  // Asignar un ID al documento

      batch.push(setDoc(docRef, docData));
    }
  }

  // Ejecutar la transacción por lotes
  try {
    await Promise.all(batch);
    ('Datos de jugadores cargados exitosamente en Firestore.');
  } catch (error) {
    console.error('Error al cargar datos de jugadores en Firestore:', error);
  }
};

export const uploadExcelDataToFirestoreLastDate = async (excelData, leagueIdentifier) => {
  const batch = [];

  for (let i = 2; i < excelData.length; i++) {
    const row = excelData[i];
    const club1= row['I'];
    const club2= row['J'];
    const date = row['K'];
    const result = row['L'];

    if (club1 && club2 && result && date) {
      // Si tenemos valores en playerName, clubName y goals, almacenamos los datos en Firestore
      const docData = {
        club1,
        club2,
        result,
        date
      };

      // Almacenar el documento en la colección correspondiente a la tabla actual
      const docRef = doc(db, 'clubs1_lastDate', club1);  // Asignar un ID al documento

      batch.push(setDoc(docRef, docData));
    }
  }

  // Ejecutar la transacción por lotes
  try {
    await Promise.all(batch);
    ('Datos de jugadores cargados exitosamente en Firestore.');
  } catch (error) {
    console.error('Error al cargar datos d4e jugadores en Firestore:', error);
  }
};

export const uploadExcelDataToFirestoreBanned = async (excelData, leagueIdentifier) => {
  const batch = [];

  for (let i = 2; i < excelData.length; i++) {
    const row = excelData[i];
    const club= row['T'];
    const player = row['U'];
    const reason = row['V'];

    if (club && player && reason) {
      // Si tenemos valores en playerName, clubName y goals, almacenamos los datos en Firestore
      const docData = {
        club,
        player,
        reason
      };

      // Almacenar el documento en la colección correspondiente a la tabla actual
      const docRef = doc(db, 'clubs1_banned', club);  // Asignar un ID al documento

      batch.push(setDoc(docRef, docData));
    }
  }

  // Ejecutar la transacción por lotes
  try {
    await Promise.all(batch);
    ('Datos de jugadores cargados exitosamente en Firestore.');
  } catch (error) {
    console.error('Error al cargar datos d4e jugadores en Firestore:', error);
  }
};

export const uploadExcelDataToFirestoreAssist = async (excelData, leagueIdentifier) => {
  const batch = [];

  for (let i = 2; i < excelData.length; i++) {
    const row = excelData[i];
    const club= row['P'];
    const count = row['Q'];
    const player = row['R'];

    if (club && player && count) {
      // Si tenemos valores en playerName, clubName y goals, almacenamos los datos en Firestore
      const docData = {
        club,
        player,
        count
      };

      // Almacenar el documento en la colección correspondiente a la tabla actual
      const docRef = doc(db, 'clubs1_assist', club);  // Asignar un ID al documento

      batch.push(setDoc(docRef, docData));
    }
  }

  // Ejecutar la transacción por lotes
  try {
    await Promise.all(batch);
    ('Datos de jugadores cargados exitosamente en Firestore.');
  } catch (error) {
    console.error('Error al cargar datos d4e jugadores en Firestore:', error);
  }
};

export const uploadExcelDataToFirestoreNextDate = async (excelData, leagueIdentifier) => {
  const batch = [];

  for (let i = 2; i < excelData.length; i++) {
    const row = excelData[i];
    const club1= row['X'];
    const club2= row['Y'];
    const date = row['Z'];

    if (club1 && club2 && date) {
      // Si tenemos valores en playerName, clubName y goals, almacenamos los datos en Firestore
      const docData = {
        club1,
        club2,
        date
      };

      // Almacenar el documento en la colección correspondiente a la tabla actual
      const docRef = doc(db, 'clubs1_nextDate', club1);  // Asignar un ID al documento

      batch.push(setDoc(docRef, docData));
    }
  }

  // Ejecutar la transacción por lotes
  try {
    await Promise.all(batch);
    ('Datos de jugadores cargados exitosamente en Firestore.');
  } catch (error) {
    console.error('Error al cargar datos d4e jugadores en Firestore:', error);
  }
};