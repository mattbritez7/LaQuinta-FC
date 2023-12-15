import * as XLSX from 'xlsx';
import { clubsAdd, uploadExcelDataToFirestore } from '../firebase/clubsCrud';

export const handleFileChange = (e, leagueIdentifier) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary'});
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      console.log(`Torneo: ${leagueIdentifier}`, JSON.stringify(sheet, null, 2));
      const parsedData = XLSX.utils.sheet_to_json(sheet, { header: 'A' });
      clubsAdd(parsedData, leagueIdentifier);
    }
  };

export const handleFileChangeStats = (e, leagueIdentifier) => {
  const reader = new FileReader();
  reader.readAsBinaryString(e.target.files[0]);
  reader.onload = (e) => {
    const data = e.target.result;
    const workbook = XLSX.read(data, { type: 'binary'});
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    console.log(`Torneo: ${leagueIdentifier}`, JSON.stringify(sheet, null, 2));
    const parsedData = XLSX.utils.sheet_to_json(sheet, { header: 'A' });
    console.log(parsedData, leagueIdentifier)
    console.log('ayudaaaa')

    uploadExcelDataToFirestore(parsedData, leagueIdentifier)
  }
};