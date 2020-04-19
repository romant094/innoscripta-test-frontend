import React from 'react';
import {compose} from 'redux';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {Button, Row, Col, Container} from 'reactstrap';
import {withAuth, withPizzaService} from '../../hoc';
import {Orders} from './orders';
import {PersonalInformation} from './personal-information';
import {onStatusMessageChange} from '../../../actions';
import {STATUS_MESSAGE} from '../../constants';

const CabinetContainer = ({authContext}) => {
    const {user, logout, getUserData} = authContext;
    const dispatch = useDispatch();

    const handleLogout = () => {
        logout();
        onStatusMessageChange(STATUS_MESSAGE.USER_SIGNED_OUT, dispatch);
    };

    return (
        <Container>
            <Row className='flex-column flex-sm-row'>
                <Col className='col mb-5 mb-sm-0'>
                    <PersonalInformation user={user} getUserData={getUserData} />
                    <Link to='/'>
                        <Button color='primary' outline onClick={handleLogout}>Sign out</Button>
                    </Link>
                </Col>
                <Col>
                    <Orders user={user}/>
                </Col>
            </Row>
        </Container>
    );
};

export const Cabinet = compose(withAuth(), withPizzaService())(CabinetContainer);
