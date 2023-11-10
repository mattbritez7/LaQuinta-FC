import { readDateslessDefeatedFences } from '../firebase/api';
import DinamicTable from '../components/DinamicTable'

function Stats() {

  console.log(readDateslessDefeatedFences());

  return ( 
    <>
      <DinamicTable tableName={'Goleadores'} player={'Leonardo'} club={'Fioraza'} goals={'10'}/>
    </>
  )
}

export default Stats;