import { useState } from "react";
import { read, utils } from "xlsx";

const useUploadExcel = () => {
  const [data, setData] = useState([]);
  const uploadFile = (file) => {
    if (file) {
      console.log(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        console.log({data})
        const workbook = read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = utils.sheet_to_json(worksheet);
        setData(json);
      };
      reader.readAsArrayBuffer(file);
    }
  };
  console.log(data);
  return [data, uploadFile];
};

export { useUploadExcel };
