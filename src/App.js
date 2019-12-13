import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppointmentListComponent from './component/AppointmentListComponent/AppointmentListComponent';

function App() {



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <AppointmentListComponent />
    </div>
  );
}

export default App;
