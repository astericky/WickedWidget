// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
// import moment from 'moment-timezone';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

import AppointmentListComponentHeader from './AppointmentListComponentHeader';
import AppointmentListDateFilter from './AppointmentListDateFilter';
import AppointmentList from './AppointmentList';


function AppointmentListComponent({ className, appointments, doctors }) {
  console.log('AppointmentListComponent :: doctors', doctors)
  return (
    <div className={`plushcare-widget ${className}`}>
      <AppointmentListComponentHeader />
      <AppointmentListDateFilter />
      <AppointmentList doctors={doctors} appointments={appointments} />
    </div>
  );
}

const styledAppointmentListComponent = styled(AppointmentListComponent)`
  width: 300px;
  height: 250px;
  overflow-y: scroll;
  color: #333;
`

export default styledAppointmentListComponent;


