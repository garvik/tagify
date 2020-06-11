import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { gql, useLazyQuery } from "@apollo/client";

const GET_HELLO = gql`
  query GetHello {
    hello
  }
`;

const App: React.FC = () => {
  const [getHello, { data }] = useLazyQuery(GET_HELLO);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button type="button" onClick={() => getHello()}>
          Query sample data
        </button>
        {data?.hello}
      </header>
    </div>
  );
};

export default App;
