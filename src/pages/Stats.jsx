import { readDateslessDefeatedFences } from '../firebase/api';
import DinamicTable from '../components/DinamicTable';
import { useEffect, useState } from 'react';

function Stats() {

  const [fencesData, setFencesData] = useState([]);

  useEffect(() => {
    const fetchDataLessDefeatedFences = async () => {
      try {
        const data = await readDateslessDefeatedFences();
        setFencesData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataLessDefeatedFences();
  }, []);

  return ( 
    <>
      <DinamicTable fencesData={fencesData}/>
    </>
  )
}

export default Stats;