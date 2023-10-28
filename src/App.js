import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';

import './App.css';
import CivDetails from "./components/CivDetails";

function App() {
  const [civData, setCivData] = useState([]);
  const [selectedCiv, setSelectedCiv] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.aoepulse.com/api/v1/civ_win_rates/");
        const data = await response.json();
        setCivData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();

  }, []);

  const columns = [
    {
      name: 'Nombre',
      selector: row => row.name,
      sortable: true,
    },
  ];

  const handleRowClicked = (row) => {
    setSelectedCiv(row);
  };

  return (
    <div className="App">
      <div className="title">
        <h1>Age of Empires II DE</h1>
      </div>
      <div className="Container">
        <div className="tableContainer">
          <DataTable
            title="Civilizaciones"
            columns={columns}
            data={civData.civs_list || []}
            onRowClicked={handleRowClicked}
            pagination
          />
        </div>
        <div className="detailContainer">
          <CivDetails civ={selectedCiv} />
        </div>
      </div>
    </div>
  );
}

export default App;
