import React, { useState } from 'react';
import { Form, Label, Input, Row, Col } from 'reactstrap';

export default function Registration(props) {
    const [input, setInput] = useState({});
    const handleInputChange = (e) => setInput({
        ...input,
        [e.currentTarget.name]: e.currentTarget.value
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setDisplay('payment');
        console.log(input)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col xs={2}>
                    <Label bsSize="sm"  for="name">Name</Label>
                </Col>
                <Col xs={5}>
                    <Input bsSize="sm"  name="firstName" id="name" placeholder="" onChange={handleInputChange}/>
                </Col>
                <Col xs={5}>
                    <Input bsSize="sm"  name="lastName" placeholder="" onChange={handleInputChange}/>
                </Col>
            </Row>
            <Row>
                <Col xs={2}>
                    <Label bsSize="sm"  for="birthDate">DOB</Label>
                </Col>
                <Col xs={10}>
                    <Input
                        bsSize="sm"
                        type="date"
                        name="birthDate"
                        id="birthDate"
                        onChange={handleInputChange}
                    />
                </Col>
            </Row>
            <Row>
                <Col xs={2}>
                <Label for="exampleEmail">Email</Label>
                </Col>
                <Col xs={10}>
                <Input
                    bsSize="sm"
                    type="email"
                    name="email"
                    id="exampleEmail"
                    onChange={handleInputChange}
                />
                </Col>
            </Row>
            <Input bsSize="sm" type="submit"/>
        </Form>
    )
}