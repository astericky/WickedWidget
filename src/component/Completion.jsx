// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import React from 'react';
import {Button, Row, Col} from 'reactstrap';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

import AppointmentListComponentHeader from './AppointmentListComponent/AppointmentListComponentHeader';

function Completion(props) {
    return (
        <div className={props.className}>
            <AppointmentListComponentHeader />
            <div className="thank-you-message">
                <Row>
                    <Col>
                        <p>
                            Thank you for booking with Plushcare!
                        </p>
                        <p>
                            Complete your profile by downloading our app or
                            visit <a href="https://www.plushcare.com/">plushcare.com</a>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button color="primary" href="http://m.onelink.me/ce917b30">
                            Download the App
                        </Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

const styledCompletion = styled(Completion)`
    .thank-you-message {
        padding: 8px;
    }
`;

export default styledCompletion