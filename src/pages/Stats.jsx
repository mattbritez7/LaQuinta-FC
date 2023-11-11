import { readDateslessDefeatedFences } from '../firebase/api';
import DinamicTable from '../components/DinamicTable';
import { useEffect, useState } from 'react';

function Stats() {

  const [fencesData, setFencesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await readDateslessDefeatedFences();
        setFencesData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return ( 
    <>
      <DinamicTable fencesData={fencesData}/>
    </>
  )
}

export default Stats;