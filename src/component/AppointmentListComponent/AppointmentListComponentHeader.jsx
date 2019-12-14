// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

import PlushCareLogo from '../../logo.png';

function AppointmentListComponentHeader({ className }) {
  return (
    <header className={`plushcare-widget-header ${className}`}>
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
  box-sizing: border-box;
  width: 100%;
  padding: 6px;
  background: #283779;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    font-size: 24px;
    line-height: 1;
    font-weight: 400;
  }

  a {
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;
  }

  img {
    width: 30px;
    height: 30px;
    margin-right: 4px;
  }
`;

export default styledAppointmentListComponentHeader;