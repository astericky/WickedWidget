import React, { useState } from 'react';
import { injectStripe, CardElement } from 'react-stripe-elements';
import {Form, Input} from 'reactstrap';


function Payment(props) {
    const onCardChange = (e) => {

    };

    const submitHandler = () => {
        props.setDisplay('completion')
    }

    return (
        <Form onSubmit={submitHandler}>
            <CardElement onChange={onCardChange}/>
            <Input type="Submit" />>
        </Form>
    );
}

export default injectStripe(Payment);