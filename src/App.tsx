import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axiosAuth from './Api';

interface adviceData {
  advice: string;
  id: string;
}

function App() {
  const [advice, setAdvice] = useState<adviceData>();

  useEffect(() => {
    axiosAuth.get('/advice').then((res) => {
      setAdvice(res.data.slip);
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p key={advice?.id}>
          {advice?.advice}
        </p>
      </header>
    </div>
  );
}

export default App;
