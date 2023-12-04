import ExcelUploader from '../components/ExcelUploader';

const UpdateStats = () => {
  return (
    <div>
      <ExcelUploader leagueIdentifier="clubs1"/>
      <ExcelUploader leagueIdentifier="clubs2"/>
      <ExcelUploader leagueIdentifier="clubs3"/>
    </div>
  );
};

export default UpdateStats;