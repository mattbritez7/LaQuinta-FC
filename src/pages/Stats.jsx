import { readDatesLessDefeatedFences } from '../firebase/lessDefeatedFencesApi';
import { readDatesScorers } from '../firebase/scorersApi';
import DinamicTable from '../components/DinamicTable';
import { useEffect, useState } from 'react';

function Stats() {

  const [LessDefeatedFencesTableData, setLessDefeatedFencesTableData] = useState([]);
  const [ScorersTableData, setScorersTableData] = useState([]);

  useEffect(() => {
    const fetchDataLessDefeatedFences = async () => {
      try {
        const data = await readDatesLessDefeatedFences();
        setLessDefeatedFencesTableData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchDataScorers = async () => {
      try {
        const data = await readDatesScorers();
        setScorersTableData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDataScorers();
    fetchDataLessDefeatedFences();
  }, []);

  return ( 
    <>
      <DinamicTable tableData={LessDefeatedFencesTableData}/>
      <DinamicTable tableData={ScorersTableData}/>
    </>
  )
}

export default Stats;