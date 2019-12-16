// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import React, { useState } from 'react';
import { StripeProvider, injectStripe, Elements, CardElement } from 'react-stripe-elements';
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
        <div className={props.className}>
            <AppointmentListComponentHeader />
            <Form onSubmit={submitHandler}>
                <p className="payment-info">
                    Your appointment is $99 or your copay.
                </p>
                <CardElement onChange={onCardChange} className="card-element" />
                <Input type="Submit" />
            </Form>
        </div>
    );
}

const styledPayment = styled(Payment)`
    width: 100%;
    height: 100%;

    form {
        padding: 8px;
    }

    .card-element {
        margin: 8px 0 12px;
    }
`;

export default injectStripe(styledPayment);