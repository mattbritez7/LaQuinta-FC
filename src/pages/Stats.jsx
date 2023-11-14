import { readDatesLessDefeatedFences } from '../firebase/lessDefeatedFencesApi';
import { readDatesScorers } from '../firebase/scorersApi';
import { readDatesLastDate } from '../firebase/lastDateApi';
import { readDatesNextDate } from '../firebase/nextDateApi';
import { readDatesBanned } from '../firebase/bannedApi';
import { readDatesSanctioned } from '../firebase/sanctionedApi';
import DinamicTable from '../components/DinamicTable';
import DinamicTableSoccerField from '../components/DinamicTableSoccerField';
import { useEffect, useState } from 'react';

function Stats() {

  const [lessDefeatedFencesTableData, setLessDefeatedFencesTableData] = useState([]);
  const [scorersTableData, setScorersTableData] = useState([]);
  const [lastDateTableData, setLastDateTableData] = useState([]);
  const [nextDateTableData, setNextDateTableData] = useState([]);
  const [bannedTableData, setBannedTableData] = useState([]);
  const [sanctionedTableData, setSanctionedTableData] = useState([]);

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

    const fetchDataBanned = async () => {
      try {
        const data = await readDatesBanned();
        setBannedTableData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchDataSanctioned = async () => {
      try {
        const data = await readDatesSanctioned();
        setSanctionedTableData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataSanctioned();
    fetchDataBanned();
    fetchDataNextDate();
    fetchDataLastDate();
    fetchDataScorers();
    fetchDataLessDefeatedFences();
  }, []);

  return ( 
    <>
      <DinamicTable tableData={lessDefeatedFencesTableData}/>
      <DinamicTable tableData={scorersTableData}/>
      <DinamicTable tableData={bannedTableData} boolean={true}/>
      <DinamicTable tableData={sanctionedTableData} boolean={true}/>
      <DinamicTableSoccerField tableData={lastDateTableData} boolean={true}/>
      <DinamicTableSoccerField tableData={nextDateTableData} boolean={false}/>
    </>
  )
}

export default Stats;