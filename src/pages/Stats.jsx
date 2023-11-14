import { readDatesLessDefeatedFences } from '../firebase/lessDefeatedFencesApi';
import { readDatesScorers } from '../firebase/scorersApi';
import { readDatesLastDate } from '../firebase/lastDateApi';
import { readDatesNextDate } from '../firebase/nextDateApi';
import DinamicTable from '../components/DinamicTable';
import DinamicTableSoccerField from '../components/DinamicTableSoccerField';
import { useEffect, useState } from 'react';

function Stats() {

  const [LessDefeatedFencesTableData, setLessDefeatedFencesTableData] = useState([]);
  const [ScorersTableData, setScorersTableData] = useState([]);
  const [lastDateTableData, setLastDateTableData] = useState([]);
  const [nextDateTableData, setNextDateTableData] = useState([]);

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

    const fetchDataLastDate = async () => {
      try {
        const data = await readDatesLastDate();
        setLastDateTableData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchDataNextDate = async () => {
      try {
        const data = await readDatesNextDate();
        setNextDateTableData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataNextDate();
    fetchDataLastDate();
    fetchDataScorers();
    fetchDataLessDefeatedFences();
  }, []);

  return ( 
    <>
      <DinamicTable tableData={LessDefeatedFencesTableData}/>
      <DinamicTable tableData={ScorersTableData}/>
      <DinamicTableSoccerField tableData={lastDateTableData} boolean={true}/>
      <DinamicTableSoccerField tableData={nextDateTableData} boolean={false}/>
    </>
  )
}

export default Stats;