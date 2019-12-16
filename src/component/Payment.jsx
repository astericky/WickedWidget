import React, { useState } from 'react';
import { injectStripe, CardElement } from 'react-stripe-elements';
import {Form, Input} from 'reactstrap';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

import AppointmentListComponentHeader from './AppointmentListComponent/AppointmentListComponentHeader';

function Payment(props) {
    const onCardChange = (e) => {

    };

    const submitHandler = () => {
        props.setDisplay('completion')
    }

    return (
        <div>
            <AppointmentListComponentHeader />
            <p className="payment-info">
                Your appointment is $99 or your copay.
            </p>
            <Form onSubmit={submitHandler} className={props.className}>
                <CardElement onChange={onCardChange} className="card-element" />
                <Input type="Submit" />
            </Form>
        </div>
    );
}

const styledPayment = styled(Payment)`
    width: 100%;
    height: 100%;

    .card-element {
        margin: 8px 0 12px;
    }
`;

export default injectStripe(styledPayment);