// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import moment from 'moment-timezone';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

import defaultDoctorImg from '../../logo.png';

function Appointment({
  id,
  time,
  formattedTime,
  doctor,
  index,
  className,
}) {
  console.log(doctor);
  const {
    first_name: firstName = '',
    last_name: lastName = '',
    image_url: imageUrl = '',
    rating = 5.0,
  } = doctor;
  return (
    <li className={`appointment ${className}`}>
      <figure className="doctor">
        <div className="doctor-img">
            <img
              src={imageUrl || defaultDoctorImg}
              alt={`Dr. ${firstName} ${lastName}`}
            />
          </div>
          <figcaption className="doctor-caption">
            <div className="doctor-name">
              {`Dr. ${firstName} ${lastName}`}
            </div>
            <div className="appointment-time">
              <time
                className="time"
                dateTime={time}
              >
                {formattedTime}
              </time>
            </div>
          </figcaption>
      </figure>
      <Button>Book</Button>
    </li>
  );
}

const styledAppointment = styled(Appointment)`
  display: flex;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #e4eaf0;

  .doctor {
    display: flex;
    padding: 0;
    margin: 0;
    font-size: 14px;
    text-align: left;
  }

  img {
    width: 40px;
    height: 40px;
  }

  .doctor-caption {
    margin-left: 8px;
  }

  .doctor-name {
    font-weight: bold;
  }

  .appointment-time {
    font-size: 12px;
  }
`;

const Button = styled.button`
  padding: 8px;
  margin-left: auto;
  border: 0;
  border-radius: 4px;
  background: #bf3fa9;
  color: #fff;
  text-transform: uppercase;
`;
export default styledAppointment