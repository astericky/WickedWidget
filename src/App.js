import React, { useState} from 'react';
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
      {renderSwitch(display)}
    </div>
  );
}

export default App;
