import "./App.css";
import { Header, GroupTable } from "./Table";
import { useFilters, useUploadExcel, useSetGroupVolume } from "./Hooks";

function App() {
  const [filters, getFilters] = useFilters();
  const [data, uploadFile] = useUploadExcel();
  const [groupVolume, setGroupVolume] = useSetGroupVolume();

  return (
    <div className="App">
      <Header getFilters={getFilters} uploadFile={uploadFile} setGroupVolume={setGroupVolume} />
      <GroupTable filters={filters} data={data} groupVolume={groupVolume} />
    </div>
  );
}

export default App;
