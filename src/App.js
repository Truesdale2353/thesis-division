import './App.css';
import TableData from './Table/Table';
import {TraitsControllerWithData} from './Table/TraitsController/TraitsControllerWithData'
import data from './Table/data';
import { useState } from 'react';

function App() {
 const [filters,setFilters]=useState({});
 const getFilters= (filters) =>{
    setFilters({...filters});
 }
  return (
    <div className="App">
      <TraitsControllerWithData getFilters={getFilters} />
      <TableData filters={filters}/>
    </div>
  );
}

export default App;
