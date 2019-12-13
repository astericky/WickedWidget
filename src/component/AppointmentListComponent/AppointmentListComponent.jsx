// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
// import React from 'react';
import moment from 'moment-timezone';

import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

import PlushCareLogo from '../../logo.png';


function AppointmentListComponent() {
  let date = moment().format('MM/DD/YYYY');
  return (
    <div className="plushcare-widget">
      <header>
        <h1>
          <a href="https://plushcare.com/book">
            <img src={PlushCareLogo} alt="PlushCare Logo" />
            PlushCare
          </a>
        </h1>
      </header>
      <div className="date-filter">
        <input type="date" value={date} />
      </div>

    </div>
  );
}

const styledAppointmentListComponent = styled(AppointmentListComponent)`
  
`

export default styledAppointmentListComponent;


