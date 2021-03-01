import styled from 'styled-components';

export const Header = styled.div`
  background-color:#692172;
  width: 100%;
  color: #FFFF;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px 0 10px;

  h1 {
    font-size: 24px;
    margin-bottom: 5px;
  }

  margin-bottom: 50px;
`;

export const Footer = styled.div`
  background-color:#692172;
  position: absolute;
  width: 100%;
  bottom: -1;

  display: flex;
  justify-content: flex-end;

  color: #FFFF;

  padding: 5px 20px;;
`;

export const DetailsBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 1500px;
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
