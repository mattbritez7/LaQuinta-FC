import TableInformative from "../components/TableInformative";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PosicionsTable from "../components/PosicionsTable";
import SelectLeague from '../components/SelectLeague';
import { clubsGet } from "../firebase/clubsCrud";
import { useEffect, useState } from 'react';

function Stats() {

  const [positionsLeagueOneTableData, setPositionsLeagueOneTableData] = useState([]);

  useEffect(() => {
    const fetchDataPositionsLeagueOne = async () => {
      try {
        const data = await clubsGet('clubs1');
        console.log(data)
        setPositionsLeagueOneTableData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataPositionsLeagueOne();
  }, []);

  return (
    <>
      <Nav />
        <SelectLeague />
        <PosicionsTable tableData={positionsLeagueOneTableData}/>
        <TableInformative />
      <Footer />
    </>
  )
}

export default Stats;