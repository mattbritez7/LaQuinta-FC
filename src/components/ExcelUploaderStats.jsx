import { handleFileChangeStats } from '../excelConfig/excelConfig';

const ExcelUploaderStats = ({ leagueIdentifier }) => {
  const handleChange = (e) => {
    handleFileChangeStats(e, leagueIdentifier);
    (leagueIdentifier)
  };

  return (
    <>
    <div>
      <input type="file" accept=".xls, .xlsx" onChange={handleChange} />
    </div> 
  </>
  );
};

export default ExcelUploaderStats;