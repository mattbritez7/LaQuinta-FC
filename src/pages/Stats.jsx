import { readDateslessDefeatedFences } from '../firebase/api';
import DinamicTable from '../components/DinamicTable';
import { useEffect, useState } from 'react';

function Stats() {

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchDataLessDefeatedFences = async () => {
      try {
        const data = await readDateslessDefeatedFences();
        setTableData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataLessDefeatedFences();
  }, []);

  return ( 
    <>
      <DinamicTable tableData={tableData}/>
    </>
  )
}

export default Stats;