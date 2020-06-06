import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  const [data, setData] = useState<any>(null);

  const querySampleData = async () => {
    const response = await fetch("/api");
    const body = await response.json();
    setData(body.message);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={querySampleData}>Query sample data</button>
        {data}
      </header>
    </div>
  );
};

export default App;
