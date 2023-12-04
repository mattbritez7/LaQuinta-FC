import TableInformative from "../components/TableInformative";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PosicionsTable from "../components/PosicionsTable";
import SelectLeague from '../components/SelectLeague';
import { clubsGet } from "../firebase/clubsCrud";
import { useEffect, useState } from 'react';

function Stats() {

  const [selectedLeague, setSelectedLeague] = useState('clubs1');
  const [positionsTableData, setPositionsTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await clubsGet(selectedLeague);
        setPositionsTableData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedLeague]);

  return (
    <>
      <Nav />
        <SelectLeague selectedLeague={selectedLeague} setSelectedLeague={setSelectedLeague} />
        <PosicionsTable tableData={positionsTableData}/>
        <TableInformative />
      <Footer />
    </>
  )
}

export default Stats;