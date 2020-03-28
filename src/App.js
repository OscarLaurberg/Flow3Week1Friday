import React, { useState, useEffect } from "react";
import CountryTable from "./CountryTable";
import "./App.css";

const App = ({factory }) => {
  const [countries, setCountries] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      factory.getLabels().then(data => setLabels([...data]));
      factory.getCountries().then(data => setCountries([... data]));
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [countries, labels, factory]);

  return (
    <div>
      <div className="App-header">
        <h2>React, State, Fetch</h2>
      </div>
      <div className="App-intro">
        <p>
          Your initial task is to fetch data from the server (see exercise for
          how to start it), and create a table below, with these data
        </p>
        <CountryTable countries={countries} labels={labels} />
      </div>
    </div>
  );
};

export default App;
