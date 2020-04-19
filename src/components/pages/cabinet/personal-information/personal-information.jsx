import React, {useState, useEffect} from 'react';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import {withPizzaService} from '../../../hoc';
import {CURRENCY, STATUS_MESSAGE} from '../../../constants';
import {onStatusMessageChange} from '../../../../actions';
import {useDispatch} from 'react-redux';

const InputField = styled(Input)`
  border-radius: ${props => props.changed === 'true' ? '0.25rem 0 0 0.25rem' : '0.25rem'};
`;

const InputMaskField = styled(InputMask)`
  border-radius: ${props => props.changed === 'true' ? '0.25rem 0 0 0.25rem' : '0.25rem'};
`;

const CurrencySelect = styled(Input)`
  border-radius: ${props => props.changed === 'true' ? '0.25rem 0 0 0.25rem' : '0.25rem'};
`;

const SaveButton = styled(Button)`
  border-radius: 0 0.25rem 0.25rem 0;
  margin-left: -1px;
  display: ${props => props.visible === 'true' ? 'inline-block' : 'none'};
`;

const Wrapper = styled.div`
  display:flex;
`;

const PersonalInformationContainer = ({user, getUserData, pizzaService}) => {
    const [address, setAddress] = useState(user.address);
    const [phone, setPhone] = useState(user.phone);
    const [currency, setCurrency] = useState(user.currency);

    const dispatch = useDispatch();

    useEffect(() => {
        setAddress(user.address);
        setPhone(user.phone);
        setCurrency(user.currency);
    }, [user]);

    const handlePhoneChange = event => {
        const value = event.target.value.replace(/_/gi, '');
        setPhone(value);
    };

    let phoneChanged = phone.length === 16 && phone !== user.phone;
    let addressChanged = address !== user.address;
    let currencyChanged = currency !== user.currency;

    const handleSaveUserData = () => {
        const userData = {
            ...user,
            phone,
            address,
            currency
        };

        pizzaService.request('/user/update', 'POST', userData)
            .then(res => {
                if (res.status === 200) {
                    onStatusMessageChange(STATUS_MESSAGE.USER_DATA_SAVED, dispatch);
                    getUserData(user.id);
                    phoneChanged = false;
                    addressChanged = false;
                    currencyChanged = false;
                }
            })
    };

    return (
        <React.Fragment>
            <h3>Personal information</h3>

            <Form>
                <FormGroup>
                    <Label for="address">Address</Label>
                    <Wrapper>
                        <InputField
                            type="text"
                            name="address"
                            id="address"
                            placeholder="Enter your address"
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                            changed={addressChanged.toString()}
                        />
                        <SaveButton
                            color='primary'
                            visible={addressChanged.toString()}
                            onClick={handleSaveUserData}
                        >
                            Save
                        </SaveButton>
                    </Wrapper>
                </FormGroup>
                <FormGroup>
                    <Label for="phone">Phone</Label>
                    <Wrapper>
                        <InputMaskField
                            className='form-control'
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Enter your phone"
                            mask="+7-999-999-99-99"
                            maskChar="_"
                            value={phone}
                            onChange={handlePhoneChange}
                            changed={phoneChanged.toString()}
                        />

                        <SaveButton
                            color='primary'
                            visible={phoneChanged.toString()}
                            onClick={handleSaveUserData}
                        >
                            Save
                        </SaveButton>
                    </Wrapper>
                </FormGroup>
                <FormGroup>
                    <Label for="currency">Default currency</Label>
                    <Wrapper>
                        <CurrencySelect
                            type="select"
                            name="currency"
                            id="currency"
                            changed={currencyChanged.toString()}
                            value={currency}
                            onChange={event => setCurrency(event.target.value)}
                        >
                            {
                                CURRENCY.map(({title, description}) => (
                                    <option
                                        // selected={description===user.currency}
                                        value={description}
                                        key={description}
                                    >
                                        {
                                            `${title}`
                                        }
                                    </option>
                                ))
                            }
                        </CurrencySelect>
                        <SaveButton
                            color='primary'
                            visible={currencyChanged.toString()}
                            onClick={handleSaveUserData}
                        >
                            Save
                        </SaveButton>
                    </Wrapper>
                </FormGroup>
            </Form>
        </React.Fragment>
    );
};

export const PersonalInformation = withPizzaService()(PersonalInformationContainer);
