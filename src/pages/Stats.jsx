import TableInformative from "../components/TableInformative";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PosicionsTable from "../components/PosicionsTable";
import SelectLeague from '../components/SelectLeague';

function Stats() {

  return (
    <>
      <Nav />
        <SelectLeague />
        <PosicionsTable />
        <TableInformative />
      <Footer />
    </>
  )
}

export default Stats;