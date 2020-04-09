import styled from 'styled-components';
import {CardTitle as Title} from 'reactstrap';

const PageHeading = styled.h1`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const CardTitle = styled(Title)`
  font-weight:600;
  font-size: 20px;
`;

export const Elements = {
    PageHeading,
    CardTitle
};
