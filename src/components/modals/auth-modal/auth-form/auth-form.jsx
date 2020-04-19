import React from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';

export const AuthForm = ({handleChange, submitPasswordVisible}) => (
    <div>
        <Form>
            <FormGroup>
                <Label for="email">E-mail</Label>
                <Input
                    required
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email"
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
