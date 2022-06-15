import './App.css';
import React, { Fragment } from 'react';
import NewEmployee from './components/NewEmployee';
import DisplayEmployee from './components/DisplayEmployee';

function App() {
  return (
      <Fragment>
        <div className="container">
          <DisplayEmployee />
          <NewEmployee />
        </div>
      </Fragment>
  );
}

export default App;
