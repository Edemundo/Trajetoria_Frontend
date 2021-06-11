import styled from 'styled-components';

export const DetailsBody = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 1300px;
  margin: 0 auto;

  article {
    display: flex;
    justify-content:space-between;

    h1 {
    font-size: 48px;
    margin-bottom: 5rem;
    }


  }

  div {
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
  }

`;

export const LoaderBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;
