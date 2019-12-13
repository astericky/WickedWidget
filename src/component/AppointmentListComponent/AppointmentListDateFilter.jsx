// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import moment from 'moment-timezone';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

function AppointmentListDateFilter() {
  let date = moment().format('MM/DD/YYYY');
  return (
    <div className="date-filter">
      <label htmlFor="date">
        Date:
        <input type="date" id="date" name="date" placeholder={date} />
      </label>
    </div>
  );
}

const styledAppointmentListDateFilter = styled(AppointmentListDateFilter)`
`;

export default styledAppointmentListDateFilter;



