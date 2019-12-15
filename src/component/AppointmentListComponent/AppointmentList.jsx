// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jstz from 'jstz';
import moment from 'moment-timezone';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

import Appointment from './Appointment';


function AppointmentList({ 
  appointments = [], 
  doctors = [],
  className,
  appointmentsLoaded,
}) {
  const timeZone = jstz.determine().name();
  const appointmentElements = appointments.map(({
    id,
    doctor: currentDoctorId,
    appointment_utc_time: appointmentUTCTime,
  }, index) => (
    <Appointment
      key={id}
      id={id}
      index={index}
      doctor={doctors.filter(({
        doctor_id: doctorId,
      }) => doctorId === currentDoctorId)[0]}
      time={moment(appointmentUTCTime).tz(timeZone)}
      formattedTime={moment(appointmentUTCTime).tz(timeZone).format('h:mm A z')}
    />
  ));
  
  if (appointmentElements.length === 0
      && !appointmentsLoaded) {
    return (
      <div className={`appointment-list ${className}`}>
        <p className="appointment-list-loading">Loading...</p>
      </div>
    );
  }

  if (appointmentElements.length === 0
      && appointmentsLoaded) {
    return (
      <div className={`appointment-list ${className}`}>
        <p className="appointment-list-loading">No Appointments</p>
      </div>
    );
  }
  return (
    <ul className={`appointment-list ${className}`}>
      {appointmentElements}
    </ul>
  );
}

const styledAppointmentList = styled(AppointmentList)`
  list-style: none;
  align-self: center;
  width: 100%;
  padding: 0;
  margin: 0;
  
  .appointment-list-loading {
    padding: 4px;
    margin: 0;
    font-size: 12px;
    line-height: 1;
    text-align: center;
    text-transform: uppercase;
  }
  .appointment:first-child {
    border-top: 1px solid #e4eaf0;
  }

  .appointment:last-child {
    border-bottom: 0;
  }
`;


export default styledAppointmentList;