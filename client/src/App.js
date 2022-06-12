import './App.css';
import React, { Fragment } from 'react';
import newEmployee from './components/newEmployee';
import displayEmployee from './components/displayEmployee';

function App() {
  return (
      <Fragment>
        <div className="container">
          <newEmployee />
          <displayEmployee />
        </div>
      </Fragment>
  );
}

export default App;
