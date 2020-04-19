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

const Text = styled.div`
    margin-bottom: .3rem;
    font-weight: 300;
`;

const TextWrapper = styled.div`
  color: rgb(115,121,140);
  text-align: center;
  font-size: 18px;
  
  @media screen and (min-width: 568px){
    font-size: 20px;
  }
`;

export const Elements = {
    PageHeading,
    CardTitle,
    Text,
    TextWrapper
};

