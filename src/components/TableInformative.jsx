import { readDates } from '../firebase/firebaseFunctions';
import DinamicTable from '../components/DinamicTable';
import DinamicTableSoccerField from '../components/DinamicTableSoccerField';
import { useEffect, useState } from 'react';
import {Text, Flex} from '@chakra-ui/react';
import SoccerField from '../assets/soccerField.jpg';

function TableInformative() {

  const [lessDefeatedFencesTableData, setLessDefeatedFencesTableData] = useState([]);
  const [scorersTableData, setScorersTableData] = useState([]);
  const [lastDateTableData, setLastDateTableData] = useState([]);
  const [nextDateTableData, setNextDateTableData] = useState([]);
  const [bannedTableData, setBannedTableData] = useState([]);
  const [sanctionedTableData, setSanctionedTableData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {

    const lessDefeatedFences = await readDates('lessDefeatedFences', 'VALLAS MENOS VENCIDAS');
    setLessDefeatedFencesTableData(lessDefeatedFences);

    const banned = await readDates('banned', 'VETADOS');
    setBannedTableData(banned);

    const lastDate = await readDates('lastDate', 'ULTIMA FECHA');
    setLastDateTableData(lastDate);

    const nextDate = await readDates('nextDate', 'SIGUIENTE FECHA');
    setNextDateTableData(nextDate);

    const sanctioned = await readDates('sanctioned', 'SANCIONADOS');
    setSanctionedTableData(sanctioned);

    const scorers = await readDates('scorers', 'GOLEADORES');
    setScorersTableData(scorers);

    }
  fetchData()
  }, []);

  return ( 
    <>
      <Text 
        fontSize={"25px"} 
        color={'#6a859c'} 
        textAlign={'center'} 
        pt={"25px"} 
        pb={"25px"} 
        borderTop={'1px solid black'}
      >
        TABLERO INFORMATIVO
      </Text>
      <Flex
        direction={{ base: "column", md: "row" }}
        wrap="wrap"
        justifyContent="center"
        background={`linear-gradient(rgba(0, 0, 0, 0.69), rgba(0, 0, 0, 0.69)), url(${SoccerField})`}
        backgroundSize="cover"
        backgroundAttachment="fixed"
        maxW="100%"
      >
      <DinamicTable tableData={lessDefeatedFencesTableData}/>
      <DinamicTable tableData={scorersTableData}/>
      <DinamicTable tableData={bannedTableData} boolean={true}/>
      <DinamicTable tableData={sanctionedTableData} boolean={true}/>
      <DinamicTableSoccerField tableData={lastDateTableData} boolean={true}/>
      <DinamicTableSoccerField tableData={nextDateTableData} boolean={false}/>
      </Flex>
    </>
  )
}

export default TableInformative;