// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
// import moment from 'moment-timezone';

import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

import AppointmentListComponentHeader from './AppointmentListComponentHeader';
import AppointmentListDateFilter from './AppointmentListDateFilter';


function AppointmentListComponent() {
  
  return (
    <div className="plushcare-widget">
      <AppointmentListComponentHeader />
      <AppointmentListDateFilter />

    </div>
  );
}

const styledAppointmentListComponent = styled(AppointmentListComponent)`

`

export default styledAppointmentListComponent;


