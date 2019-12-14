import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './App.css';
import AppointmentListComponent from './component/AppointmentListComponent/AppointmentListComponent';
import Registration from './component/Registration';
import Payment from './component/Payment';
import Completion from './component/Completion';
import {fetchAppointments} from './helpers'

function App() {
  let today = moment();
  const [display, setDisplay] = useState('appointments');
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [date, setDate] = useState(today);

  const getApps = async (appData) => {
    const {
      data: {
        appointments,
        doctors,
      }
    } = await fetchAppointments(appData);
    setDoctors(doctors);
    setAppointments(appointments);
  }

  useEffect(() => {
    getApps({
        state: 'CA',
        start_time: moment(date).toISOString(true),
        doctor_type: 'internal',
        pagination_size: 3,
        paginate_cursor_appt: ''
    })

  }, [])
  const renderSwitch = (display) => {
    switch (display) {
      case 'appointments':
        return <AppointmentListComponent 
          doctors={doctors} 
          appointments={appointments}
          appointmentDate={moment(date).format('YYYY-MM-DD')}
          setAppointmentDate={setDate}
        />
      case 'registration':
        return <Registration />
      case 'payment':
        return <Payment />
      case 'completion':
        return <Completion />
      default:
        return <AppointmentListComponent doctors={doctors} appointments={appointments} />
    }
  }

  return (
    <div className="App">
      {renderSwitch(display)}
    </div>
  );
}

export default App;
