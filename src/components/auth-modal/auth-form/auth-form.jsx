import React from 'react';
import styled from 'styled-components';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Wrapper = styled.div`
  
`;

export const AuthForm = ({handleChange, submitPasswordVisible}) => (
    <div>
        <Form>

            <FormGroup>
                <Label for="name">User name</Label>
                <Input
                    required
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter user name"
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input
                    required
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter password"
                    onChange={handleChange}
                />
            </FormGroup>
            {
                submitPasswordVisible && (
                    <FormGroup>
                        <Label for="confirmPassword">Password</Label>
                        <Input
                            required
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="Confirm password"
                            onChange={handleChange}
                        />
                    </FormGroup>
                )
            }
        </Form>
    </div>
);
