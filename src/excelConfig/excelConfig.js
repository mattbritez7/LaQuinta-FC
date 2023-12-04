import * as XLSX from 'xlsx';
import { clubsAdd } from '../firebase/clubsCrud';

export const handleFileChange = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary'});
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      console.log('hasta aca llegue mostro 1 ' + JSON.stringify(sheet, null, 2));
      const parsedData = XLSX.utils.sheet_to_json(sheet, { header: 'A' });
      clubsAdd(parsedData);
    }
  };