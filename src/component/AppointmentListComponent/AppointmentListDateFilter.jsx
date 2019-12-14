// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { useState } from 'react';
import moment from 'moment-timezone';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

function AppointmentListDateFilter({ className }) {
  let today = moment().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  return (
    <div className={`date-filter ${className}`}>
      <label htmlFor="date">
        Date
        <input 
          type="date" 
          id="date" 
          name="date" 
          placeholder={date}
          onChange={({ target: { value }}) => {
            setDate(value);
          }}
          value={date}
        />
      </label>
    </div>
  );
}

const styledAppointmentListDateFilter = styled(AppointmentListDateFilter)`
  box-sizing: border-box;
  width: 100%;
  padding: 4px;
  background: #e9eef2;
  font-size: 12px;
  text-transform: uppercase;

  input[type=date] {
    border: 0;
    outline: 0;
    margin-left: 4px;
    background: transparent;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    text-transform: uppercase;
  }
`;

export default styledAppointmentListDateFilter;



