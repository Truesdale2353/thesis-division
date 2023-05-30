import "./App.css";
import { useEffect, useState } from "react";
import { Header } from "./Table";
import { useFilters, useUploadExcel, useSetGroupVolume } from "./Hooks";
import { TablesContainer } from "./Table/TablesContainer";
import { filterDivision } from "./Table/SortingHelpers/filterDivision";

function App() {
  const [filters, getFilters] = useFilters();
  const [data, uploadFile] = useUploadExcel();
  const [groupVolume, setGroupVolume] = useSetGroupVolume();
  const [items, setItems] = useState([]);
  const [enableGenerate, setEnableGenerate] = useState(false);

  useEffect(() => {
    if (data.length > 0) {
      setEnableGenerate(true);
    }
  }, [data]);
  const onGenerate = () => {
    setItems(filterDivision({ filters, data, groupVolume }));
  };
  return (
    <div className="container">
      <Header
        getFilters={getFilters}
        uploadFile={uploadFile}
        setGroupVolume={setGroupVolume}
        onGenerate={onGenerate}
        enableGenerate={enableGenerate}
      />
      <TablesContainer items={items} />
    </div>
  );
}

export default App;
