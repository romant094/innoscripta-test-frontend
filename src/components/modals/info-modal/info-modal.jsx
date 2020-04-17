import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {onStatusMessageChange} from '../../../actions';

export const InfoModal = () => {
    const statusMessage = useSelector(state => state.statusMessage);
    const dispatch = useDispatch();

    const clearStatusMessage = () => onStatusMessageChange(null, dispatch);

    return (
        <Modal isOpen={!!statusMessage} toggle={clearStatusMessage}>
            <ModalHeader toggle={clearStatusMessage}>Notification</ModalHeader>
            <ModalBody>
                {statusMessage}
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={clearStatusMessage}>OK</Button>
            </ModalFooter>
        </Modal>
    );
};
