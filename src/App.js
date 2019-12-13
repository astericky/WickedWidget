import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AppointmentListComponent from './component/AppointmentListComponent/AppointmentListComponent';
import Registration from './component/Registration';
import Payment from './component/Payment';
import Completion from './component/Completion';

function App() {
  const [display, setDisplay] = useState('appointments');
  const [appointments, setAppointments] = useState([]);

  const renderSwitch = (display) => {
    switch (display) {
      case 'appointments':
        return <AppointmentListComponent />
      case 'registration':
        return <Registration />
      case 'payment':
        return <Payment />
      case 'completion':
        return <Completion />
      default:
        return <AppointmentListComponent />
    }
  }

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
      {renderSwitch(display)}
    </div>
  );
}

export default App;
