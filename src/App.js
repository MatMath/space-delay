import React from 'react';
import './App.css';

import { BFR, FH, SLS, JWT } from './baseData';

import GanttChart from './gantChart';
import DetailsInfo from './detailsInfo';

function App() {
  return (
    <div className="App">
      <h1>Project Delay in space</h1>
      {[BFR(), FH(), SLS(), JWT()].map(item => (
        <div key={item.id}>
          <GanttChart project={item}></GanttChart>
          <br />
          <DetailsInfo project={item}></DetailsInfo>
          <br />
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
