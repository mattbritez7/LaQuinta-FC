import { readDateslessDefeatedFences } from '../firebase/api';
import DinamicTable from '../components/DinamicTable'

function Stats() {

  console.log(readDateslessDefeatedFences());
  const goleadores = [{
    tableName: 'Goleadores',
    player: 'Leonardo',
    club: 'fioraza',
    goals: '3'
  }]

  return ( 
    <>
      <DinamicTable goleadores={goleadores}/>
    </>
  )
}

export default Stats;