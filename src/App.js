import React from 'react';
import './App.css';

import { BFR, FH, SLS, JWT } from './baseData';

import GanttChart from './gantChart';

function App() {
  return (
    <div className="App">
      <h1>Project Delay in space</h1>
      <div><h2>Graph</h2></div>
      <GanttChart project={FH}></GanttChart>
      <br />
      <GanttChart project={BFR}></GanttChart>
      <br />
      <GanttChart project={SLS}></GanttChart>
      <br />
      <GanttChart project={JWT}></GanttChart>
      <div><h2>Details</h2></div>
    </div>
  );
}

export default App;
