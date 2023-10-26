import React, { useState, useEffect } from 'react';

import './App.css';
import CivSelector from "./components/CivSelector";
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

  const handleCivSelect = (civName) => {
    setSelectedCiv(civData.civs_list?.find(civ => civ.name === civName));
  };

  return (
    <div className="App bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Age of Empires II DE</h1>
      <CivSelector civs={civData.civs_list || []} onCivSelect={handleCivSelect} />
      <CivDetails civ={selectedCiv} />
    </div>
  );
}

export default App;
