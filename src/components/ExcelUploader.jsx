import { handleFileChange } from '../excelConfig/excelConfig';

const ExcelUploaderLeague = ({ leagueIdentifier }) => {
  const handleChange = (e) => {
    handleFileChange(e, leagueIdentifier);
    (leagueIdentifier)
  };

  return (
    <div>
      <input type="file" accept=".xls, .xlsx" onChange={handleChange} />
    </div> 
  );
};

export default ExcelUploaderLeague;