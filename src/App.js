import "./App.css";
import { Header } from "./Table";
import { useFilters, useUploadExcel, useSetGroupVolume } from "./Hooks";
import { TablesContainer } from "./Table/TablesContainer";

function App() {
  const [filters, getFilters] = useFilters();
  const [data, uploadFile] = useUploadExcel();
  const [groupVolume, setGroupVolume] = useSetGroupVolume();

  return (
    <div className="App">
      <Header getFilters={getFilters} uploadFile={uploadFile} setGroupVolume={setGroupVolume} />
      <TablesContainer filters={filters} data={data} groupVolume={groupVolume} />
    </div>
  );
}

export default App;
