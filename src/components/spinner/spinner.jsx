import React from 'react';
import styled from 'styled-components';
import {Spinner} from 'reactstrap';

const RSpinner = styled(Spinner)`
  width: 5rem;
  height: 5rem;
  background-color: var(--primary);
  margin: 0 auto;
`;

const SpinnerWrapper = styled.div`
  display:flex;
  justify-content:center;
`;

const CustomSpinner = () => (
    <SpinnerWrapper>
        <RSpinner type='grow' />
    </SpinnerWrapper>
);

export {CustomSpinner as Spinner};
