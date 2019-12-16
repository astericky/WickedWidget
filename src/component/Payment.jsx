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
        <StripeProvider apiKey="pk_test_12345">
            <Elements>
            <>
                <Form onSubmit={submitHandler} className={props.className}>
                    <AppointmentListComponentHeader />
                    <CardElement onChange={onCardChange} className="card-element" />
                    <Input type="Submit" />
                </Form>
            </>
        </Elements>
      </StripeProvider>
    );
}

const styledPayment = styled(Payment)`
    width: 100%;
    height: 100%;

    .card-element {
        margin: 8px 0;
    }
`;

export default injectStripe(styledPayment);