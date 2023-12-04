import { handleFileChange } from '../excelConfig/excelConfig'

const ExcelUploader = () => {

  return (
    <div>
      <input type="file" accept=".xls, .xlsx" onChange={handleFileChange} />
    </div> 
  );
};

export default ExcelUploader;