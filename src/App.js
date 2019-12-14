import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { StripeProvider, injectStripe, Elements } from 'react-stripe-elements';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppointmentListComponent from './component/AppointmentListComponent/AppointmentListComponent';
import Registration from './component/Registration';
import Payment from './component/Payment';
import Completion from './component/Completion';
import {fetchAppointments} from './helpers'

function App() {
  const [display, setDisplay] = useState('registration');
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const getApps = async (appData) => {
    const {appointments, doctors} = await fetchAppointments(appData);
    setAppointments(appointments);
    setDoctors(doctors);
  }

  useEffect(() => {
    getApps({
        state: 'CA',
        start_time: moment().toISOString(true),
        doctor_type: 'internal',
        pagination_size: 3,
        paginate_cursor_appt: ''
    })

  }, [])

  const renderSwitch = (display) => {
    switch (display) {
      case 'appointments':
        return <AppointmentListComponent doctors={doctors} appointments={appointments} setDisplay={setDisplay}/>
      case 'registration':
        return <Registration setDisplay={setDisplay}/>
      case 'payment':
        return <Payment setDisplay={setDisplay}/>
      case 'completion':
        return <Completion />
      default:
        return <AppointmentListComponent />
    }
  }

  return (
    <div className="App">
      <StripeProvider apiKey="pk_test_12345">
        <Elements>
          <>
            {renderSwitch(display)}
          </>
        </Elements>
      </StripeProvider>
    </div>
  );
}

export default App;
