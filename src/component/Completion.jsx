import React, { useState } from 'react';
import {Button, Row, Col} from 'reactstrap';

import AppointmentListComponentHeader from './AppointmentListComponent/AppointmentListComponentHeader';

export default function Completion(props) {

    return (
        <div>
            <AppointmentListComponentHeader />
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
    );
}