// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

import PlushCareLogo from '../../logo.png';

function AppointmentListComponentHeader({ className }) {
  return (
    <header className={className}>
      <h1>
        <a href="https://plushcare.com/book">
          <img src={PlushCareLogo} alt="PlushCare Logo" />
          PlushCare
        </a>
      </h1>
    </header>
  );
}

const styledAppointmentListComponentHeader = styled(AppointmentListComponentHeader)`
  background: #283779;

  h1 {
    margin: 0;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  img {
    width: 30px;
    height: 30px;
    margin-right: 8px;
  }
`;

export default styledAppointmentListComponentHeader;