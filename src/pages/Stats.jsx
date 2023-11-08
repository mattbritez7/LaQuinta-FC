import { readDateslessDefeatedFences } from '../firebase/api';


function Stats() {

  console.log(readDateslessDefeatedFences());

  return ( 
    <h1>
     VALLAS MENOS VENCIDAS
    </h1>
  )
}

export default Stats;