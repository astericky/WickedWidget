// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
// import moment from 'moment-timezone';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

import AppointmentListComponentHeader from './AppointmentListComponentHeader';
import AppointmentListDateFilter from './AppointmentListDateFilter';
import AppointmentList from './AppointmentList';


function AppointmentListComponent({ 
  className, 
  appointments, 
  doctors,
  appointmentDate,
  setAppointmentDate,
}) {
  return (
    <div className={`plushcare-widget ${className}`}>
      <AppointmentListComponentHeader />
      <AppointmentListDateFilter
        appointmentDate={appointmentDate}
        setAppointmentDate={setAppointmentDate}
      />
      <AppointmentList doctors={doctors} appointments={appointments} />
    </div>
  );
}

const styledAppointmentListComponent = styled(AppointmentListComponent)`
  width: 300px;
  height: 250px;
  border: 1px solid #e4eaf0;
  overflow-y: scroll;
  color: #333;
`

export default styledAppointmentListComponent;


