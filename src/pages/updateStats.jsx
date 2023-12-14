import ExcelUploader from '../components/ExcelUploader';
import ExcelUploaderStats from '../components/ExcelUploaderStats';

const UpdateStats = () => {
  return (
    <div>
      <h1>ACTUALIZAR LIGA 1</h1>
      <ExcelUploader leagueIdentifier="clubs1"/>
      <h1>ACTUALIZAR LIGA 2</h1>
      <ExcelUploader leagueIdentifier="clubs2"/>
      <h1>ACTUALIZAR LIGA 3</h1>
      <ExcelUploader leagueIdentifier="clubs3"/>
      <h1>ACTUALIZAR STATS 1</h1>
      <ExcelUploaderStats />
    </div>
  );
};

export default UpdateStats;