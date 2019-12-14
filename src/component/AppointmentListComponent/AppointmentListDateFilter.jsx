// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import moment from 'moment-timezone';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

function AppointmentListDateFilter({ className }) {
  let date = moment().format('MM/DD/YYYY');
  return (
    <div className={`date-filter ${className}`}>
      <label htmlFor="date">
        Date
        <input type="date" id="date" name="date" placeholder={`MM/DD/YYYY`} />
      </label>
    </div>
  );
}

const styledAppointmentListDateFilter = styled(AppointmentListDateFilter)`
  box-sizing: border-box;
  width: 100%;
  padding: 4px;
  font-size: 12px;
  text-transform: uppercase;

  input[type=date] {
    border: 0;
    outline: 0;
    margin-left: 4px;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    text-transform: uppercase;
  }
`;

export default styledAppointmentListDateFilter;



